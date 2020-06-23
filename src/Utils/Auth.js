import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();
const secret = process.env.SECRET_KEY;

/**
  * @Module Auth
  * @description Authentication related methods
  */
class Auth {
  /**
   * @function jwtVerify
   * @param {String} token String
   * @returns {Object} decoded token
   */
  static jwtVerify(token) {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    return decodedToken;
  }

  /**
    * @description Verify a jwt token
    * @param {Object} token - Token to be verified
    *  @param {function} callBack - call back method to jwt
    * @returns {Object} verified token
    * @memberof Auth
    */
  static async verifyToken(token, callBack) {
    return jwt.verify(token, secret, callBack);
  }

  /**
   * @function tokenChecker
   * @param {String} token String
   * @param {String} secretKey String
   * @returns {Object} decoded token
   */
  static tokenChecker(token, secretKey) {
    try {
      const values = jwt.verify(token, secretKey);
      return values;
    } catch (err) {
      return null;
    }
  }
}

export default Auth;
