import helpers from '../Utils';
import UserService from '../services/user.service';

const { Responses } = helpers;

class AdminController {
/**
   * @description This helps a super administrator to change users role
   * @param  {object} req - The request object
   * @param  {object} res - The response object
   * @returns  {object} The response object
   */
  static async updateUserRole(req, res) {
    const { email, roleName } = req.body;
    const { role } = req.userData;

    try {
      const existingUser = await UserService.findByEmail(email);
      if (!existingUser) {
        return res.json({ status: 409, message: 'User does not exists' });
      }
      if (roleName === 'super-administrator') {
        return Responses.Error(res, 401, { error: 'Role unsupported, contact administrator' });
      }
      const user = await UserService.update({ email }, { role: roleName });
      if (user[0] === 0) {
        Responses.Error(res, 401, { error: 'User not found' });
      }
      const newUser = {
        email: user[1][0].email,
        userName: user[1][0].userName,
        new_role: user[1][0].role
      };
      return Responses.Success(res, 200, 'Role updated successfuly', newUser);
    } catch (error) {
      Responses.Error(res, 500, { error: 'Internal server error' });
    }
  }
}

export default AdminController;
