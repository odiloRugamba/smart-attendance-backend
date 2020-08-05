import Response from '../../Utils/response';

import {createStaff} from '../Schema/staff';


class Validator {
  /**
   * @param {req} req object
   * @param {res} res object
   * @param {next} next forwards request to the next middleware function
   * @returns {obj} returns a response object
  */
  static async createStaffValidation(req, res, next) {
    const { error } = createStaff(req.body);
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
