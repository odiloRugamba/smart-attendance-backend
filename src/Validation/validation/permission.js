import Response from '../../Utils/response';

import {createPermission, updatePermission} from '../Schema/permission';


class Validator {
  /**
   * @param {req} req object
   * @param {res} res object
   * @param {next} next forwards request to the next middleware function
   * @returns {obj} returns a response object
  */
  static async createPermissionValidation(req, res, next) {
    const { error } = createPermission(req.body);
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
 static async updatePermissionValidation(req, res, next) {
  const { error } = updatePermission(req.body);
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
