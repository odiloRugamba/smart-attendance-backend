import Response from '../Utils/response';

import Schema from './Schema/schema';

const {
  signup, loginchema, assignRole
} = Schema;

class Validator {
  /**
   * @param {req} req object
   * @param {res} res object
   * @param {next} next forwards request to the next middleware function
   * @returns {obj} returns a response object
  */
  static async userValidate(req, res, next) {
    const { error } = signup(req.body);
    try {
      if (error) {
        return Response.Error(res, 400, error.message);
      }
      return next();
    } catch (err) {
      return Response.Error(res, 500, 'Internal server error');
    }
  }

  /**
   * @param {req} req object
   * @param {res} res object
   * @param {next} next forwards request to the next middleware function
   * @returns {obj} returns a response object
  */
  static async loginValidate(req, res, next) {
    const { error } = loginchema(req.body);
    try {
      if (error) {
        return Response.Error(res, 400, error.message);
      }
      return next();
    } catch (err) {
      return Response.Error(res, 500, 'Internal server error');
    }
  }

  /**
   * @param {req} req object
   * @param {res} res object
   * @param {next} next forwards request to the next middleware function
   * @returns {obj} returns a response object
  */
  static async assignRole(req, res, next) {
    const { error } = assignRole(req.body);
    try {
      if (error) {
        return Response.Error(res, 400, error.message);
      }
      return next();
    } catch (err) {
      return Response.Error(res, 500, 'Internal server error');
    }
  }
}

export default Validator;
