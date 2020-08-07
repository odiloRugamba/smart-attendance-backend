import Response from '../../Utils/response';

import {createSchool, updateSchool} from '../Schema/school';


class Validator {
  /**
   * @param {req} req object
   * @param {res} res object
   * @param {next} next forwards request to the next middleware function
   * @returns {obj} returns a response object
  */
  static async createSchoolValidation(req, res, next) {
    const { error } = createSchool(req.body);
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
 static async updateSchoolValidation(req, res, next) {
  const { error } = updateSchool(req.body);
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
