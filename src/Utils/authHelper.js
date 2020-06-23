import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { config } from 'dotenv';

config();

const secret = process.env.SECRET_KEY;
const saltRounds = 7;

/**
   * Password hashing method
   * @param {String} password - unencrypted password
   * @returns {String} - encrypted password
   */
const hashedPassword = password => bcrypt.hashSync(password, saltRounds);

/**
   * Compare passwords
   * @param {String} password - unencrypted password
   * @param {String} hashPassword - encrypted password
   * @returns {Boolean} - passwords match?
   */
const comparePassword = (password, hashPassword) => bcrypt.compareSync(password, hashPassword);

/**
   * @function jwtVerify
   * @param {String} token String
   * @returns {Object} decoded token
   */
const jwtVerify = (token) => {
  const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
  return decodedToken;
};

/**
    * @description Verify a jwt token
    * @param {Object} token - Token to be verified
    *  @param {function} callBack - call back method to jwt
    * @returns {Object} verified token
    * @memberof Auth
    */
const verifyToken = (token, callBack) => jwt.verify(token, secret, callBack);

/**
   * Generate a random password
   * @returns {String} randomPassword
   * @returns {String} hashedRandomPassword
   */
const generateRandomPassword = () => {
  const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerLetters = upperLetters.toLowerCase();
  const digits = '0123456789';
  const alphanumeric = upperLetters + lowerLetters + digits;
  const alphanumericArray = alphanumeric.split('');
  const arrayLength = alphanumericArray.length;
  let randomPassword = '';
  const passwordLength = 8;
  let i;

  for (i = 0; i <= passwordLength; i += 1) {
    const randomNumber = Math.floor(Math.random() * arrayLength);
    const char = alphanumericArray[randomNumber];
    randomPassword += char;
  }

  return { randomPassword, hashedRandomPassword: hashedPassword(randomPassword) };
};

export default {
  hashedPassword, comparePassword, jwtVerify, verifyToken, generateRandomPassword
};
