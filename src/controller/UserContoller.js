import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import models from '../database/models';
import helpers from '../Utils';
import UserService from '../services/user.service';
import redisClient from '../database/redis.database';
import Auth from '../Utils/Auth';

dotenv.config();

// const { Op } = sequelize;
const {
  Responses,
  comparePassword,
  hashPassword,
  Mail,
} = helpers;


/**
  * @Module UserController
  * @description Controlls all the user based activity
  */
class UserController {
  /**
    * @static
    * @description Allows a user to sign up
    * @param {Object} req - Request object
    * @param {Object} res - Response object
    * @returns {Object} object containing user data and access Token
    * @memberof UserController
    */
  static async signUp(req, res) {
    try {
      const {
        email, userName, password, phoneNumber
      } = req.body;
      const existingUser = await UserService.findByEmail(email);

      if (existingUser) {
        return res.status(409).json({ status: 409, message: 'User with this email already exists' });
      }
      const newUser = { ...req.body, password: hashPassword(password), verified: false };
      const user = await models.User.create(newUser);
      const greatUser = {
        id: user.id, role: user.role, phoneNumber: user.phoneNumber, userName: user.userName, email: user.email
      };
      const token = jwt.sign(greatUser, process.env.SECRET_KEY);

      const mail = new Mail({
        to: user.email,
        subject: 'Welcome to Smart Gate',
        messageHeader: `Hi, ${user.userName}!`,
        messageBody: 'We are exicted to get you started. First, you have to verify your account. Just click on the link below',
        iButton: true
      });
      mail.InitButton({
        text: 'Verify Email',
        link: `${process.env.APP_URL}/welcome/api/auth/confirmEmail?email=${greatUser.email}&token=${token}`,
      });
      await mail.sendMail();
      const data = {
        id: user.id,
        token,
        userName,
        phoneNumber,
        email,
        role: user.role,
      };
      return res.status(201).json({ status: 201, message: `We have sent verification link to ${data.email}`, data });
    } catch (err) {
      return Responses.Error(res, 500, 'Internal Server Error');
    }
  }

  /**
    * @static
    * @description Allows a user to sign in
    * @param {Object} req - Request object
    * @param {Object} res - Response object
    * @returns {Object} object containing user data and access Token
    * @memberof UserController
    */
  static async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await UserService.findUserByEmail(email);
      if (!user) return Responses.Error(res, 403, { error: 'Wrong email or password' });
      const matchPasswords = comparePassword(password, user.password);
      if (!matchPasswords) return Responses.Error(res, 403, { error: 'Wrong email or password' });
      if (user.isVerified === false) {
        return Responses.Error(res, 403, { error: 'Your account have to be verified to login' });
      }
      const newUser = {
        id: user.id, userName: user.userName, email: user.email, role: user.role
      };
      const token = jwt.sign(newUser, process.env.SECRET_KEY);
      return Responses.Success(res, 200, `Hello ${user.userName}! you are Logged in successfully`, {
        token,
        id: user.id,
        userName: user.userName,
        role: user.role,
        lastLogin: user.lastLogin,
        isVerified: user.isVerified
      });
    } catch (err) {
      return Responses.Error(res, 500, 'Internal Server Error');
    }
  }

  /**
   * @description contoller function that logs a user out
   * @param {object} req - request object
   * @param {object} res - response object
   * @param {object} next - middleware object
   * @returns {object} user - Logged in user
   */
  static async logout(req, res) {
    try {
      const token = req.headers.token.split(' ')[1] || req.params.token;
      redisClient.set('token', token);
      return res.status(200).json({
        status: 200,
        message: 'You have logged out'
      });
    } catch (error) {
      res.status(403).json({ status: 403, error: 'provide token!' });
    }
  }

  /**
  * @description Sends reset link to user Email
  * @param {Object} req - Request object
  * @param {Object} res - Response object
  * @returns {Object} object containing user data which will be embedded in link sent to user
  * @memberof UserController
  */
  static async sendResetLink(req, res) {
    try {
      const { email } = req.body;
      const user = await UserService.findByEmail(email);
      if (!user) return Responses.Error(res, 404, `No user found with email address: ${email}`);
      if (user.password === null) return Responses.Error(res, 403, 'You cannot change social account password ');

      const payload = {
        id: user.id,
        userName: user.userName,
        email: user.email,
      };
      const token = jwt.sign(payload, user.password);

      const link = `${process.env.APP_URL}/reset?email=${payload.email}&token=${token}`;
      const mail = new Mail({
        to: email,
        subject: 'Password Reset',
        messageHeader: `Hello, <strong>${user.userName}!</strong>`,
        messageBody: 'Click on the link below to reset your password',
        iButton: true
      });
      mail.InitButton({
        text: 'Reset Password',
        link,
      });
      mail.sendMail();

      return Responses.Success(res, 200, `Hi ${user.userName.toUpperCase()}, A password reset link has been sent to your mail-box`, link);
    } catch (err) {
      return Responses.Error(res, 500, 'Internal Server Error');
    }
  }

  /**
   * @description This is a function for sending email to a user with an account
   * @param  {object} req - The request object
   * @param  {object} res - The response object
   * @returns  {object} The response object
   */
  static async resetPassword(req, res) {
    try {
      const { email, token } = req.params;
      const user = await UserService.findByEmail(email);
      if (!user) return Responses.Error(res, 404, 'User with that email not found');
      const valid = Auth.tokenChecker(token, user.password);
      if (!valid) return Responses.Error(res, 401, 'Password reset Link has expired, Request another link to perform the action');

      const {
        password,
        confirmPassword
      } = req.body;

      if (password !== confirmPassword) return Responses.Error(res, 400, 'Password does not match');

      const hashPswd = await hashPassword(password);

      await models.User.update(
        {
          password: hashPswd
        },
        {
          where: {
            email
          },
          returning: false
        }
      );
      return res.status(200).json({
        status: 200,
        message: 'Password is updated successfully',
      });
    } catch (err) {
      return Responses.Error(res, 500, 'Internal Server Error');
    }
  }

  /**
   * verify user.
   * @param {object} req  details.
   * @param {object} res  details.
   * @param {object} next nest task
   * @returns {object}.
   */
  static async userVerification(req, res, next) {
    try {
      const { email } = jwt.verify(req.params.token, process.env.SECRET_KEY);
      const user = await UserService.findByEmail(email);

      if (user.isVerified) {
        return Responses.conflictError(res, 'Email already verified');
      }
      await UserService.verify(email, { isVerified: true });
      const User = await UserService.getProfile(user.id);

      return Responses.Success(res, 201, 'Email verified succesfully', User);
    } catch (error) {
      return next({ message: 'error.message', stack: error.stack, status: 401 });
    }
  }
}

export default UserController;
