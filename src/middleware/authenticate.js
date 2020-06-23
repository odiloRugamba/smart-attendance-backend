import Auth from '../Utils/Auth';
import UserService from '../services/user.service';
import redisClient from '../database/redis.database';


/**
  * @Module Authenticate
  * @description Authentication related methods
  */
class Authenticate {
  /**
   *
   * @param { obj } req
   * @param { obj } res
   * @param { function } next
   * @returns { * } null
   */
  static async verifyToken(req, res, next) {
    try {
      const token = req.headers.token.split(' ')[1];
      const payload = Auth.jwtVerify(token);
      redisClient.get('token', (err, userToken) => {
        const user = UserService.findByEmail(payload.email);
        if (!user) {
          return res.status(400).json({ status: 400, error: 'invalid token' });
        }
        if (token === userToken) {
          return res.status(401).json({ status: 401, error: 'Please login required' });
        }

        req.userData = payload;
        next();
      });
    } catch (ex) {
      return res.status(400).json({ status: 400, error: 'invalid token' });
    }
  }

  /**
   * @static
   * @description Gets user details if the user is logged in. But returns next with
   * no details if the user is not logged in
   * @param {object} req - Request object
   * @param {object} res - Response object
   * @param {Object} next - Next function call
   * @returns {object} Json
   * @memberof Authenticate
   */
  static async optionalLogin(req, res, next) {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) return next();
    return Authenticate.verifyToken(req, res, next);
  }

  /**
   * @static
   * @descripttion Middleware to check if user is active before they can perform certain actions
   * @param {*} req  - Request Obj
   * @param {*} res  - Response Obj
   * @param {*} next - Next function call
   * @returns {object} Json
   * @returns {Function} - next function call
   */
  static async isActive(req, res, next) {
    const { isActive } = req.user;
    if (!isActive) return res.status(400).json({ status: 400, error: 'Authorization error' });
    return next();
  }

  /**
   *
   * @param {*} req - Request Obj
   * @param {*} res - Response Obj
   * @param {*} next - Next function call
   * @returns {object} Json
   * @return {Function} - next function call
   */
  static async isJustAUser(req, res, next) {
    const { role } = req.user;
    if (role === 'user') return res.status(401).json({ status: 401, error: 'Authorization error' });
    return next();
  }

  /**
   * @static
   * @descripttion Middleware to check if user is active before they can perform certain actions
   * @param {*} error  - Request error
   * @param {*} req  - Request Obj
   * @param {*} res  - Response Obj
   * @param {*} next - Next function call
   * @returns {object} Json
   * @returns {Function} - next function call
   */
  static async handleGoogleError(error, req, res, next) {
    if (error) {
      return res.redirect('/api/auth/google');
    }
    return next();
  }

  /**
   * @static
   * @descripttion Middleware to check if user is active before they can perform certain actions
   * @param {*} error  - Request error
   * @param {*} req  - Request Obj
   * @param {*} res  - Response Obj
   * @param {*} next - Next function call
   * @returns {object} Json
   * @returns {Function} - next function call
   */
  static async handleFacebookError(error, req, res, next) {
    if (error) {
      return res.redirect('/api/auth/facebook');
    }
    return next();
  }
}

export default Authenticate;
