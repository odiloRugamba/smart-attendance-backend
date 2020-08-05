import Response from '../../Utils/response';

import {createClass, updateClass} from '../Schema/class';


class Validator {
  /**
   * @param {req} req object
   * @param {res} res object
   * @param {next} next forwards request to the next middleware function
   * @returns {obj} returns a response object
  */
  static async createClassValidation(req, res, next) {
    const { error } = createClass(req.body);
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
 static async updateClassValidation(req, res, next) {
  const { error } = updateClass(req.body);
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
