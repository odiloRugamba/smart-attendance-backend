import UserService from '../services/user.service';
import helpers from '../Utils';
import { upload } from '../Utils/ImageUploader';


const {
  Responses,
} = helpers;

class ProfileController {
/**
 *function fetch user profile
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @returns {object} responses
 */
  static async fetchAllUsers(req, res) {
    const Users = await UserService.findAll();
    return Responses.Success(res, 200, 'successfully retrieved user profile', Users);
  }

  /* function fetch all users
    * @param {object} req
    * @param {object} res
    * @param {function} next
    * @returns {object} responses
    */
  static async getUserProfile(req, res) {
    const { id } = req.params;

    const User = await UserService.getProfile(id);
    return Responses.Success(res, 200, 'successfully retrieved all users', User);
  }
  /*
    * function fetch all users
    * @param {object} req
    * @param {object} res
    * @param {function} next
    * @returns {object} responses
    */

  static async updateProfile(req, res, next) {
    try {
      const { id } = req.user;
      // await UserService.updateUser({ id: userId }, req.body);
      console.log(id);
      console.log(req.body);


      await UserService.updateOrCreate(id, req.body);

      const profile = await UserService.getProfile(id);
      return Responses.Success(res, 200, 'User Profile Updated', profile);
    } catch (error) {
      return next(error);
    }
  }

  /**
     *
     * @param {req} req
     * @param {res} res
     * @returns {obj} returns a response
     */
  static async updateProfileImage(req, res) {
    try {
      const { image } = req.files;
      const cloudFile = await upload(image.tempFilePath);
      req.body.url = cloudFile.url;
      const user = req.user.id;
      const response = await UserService.updateOrCreatePicture(user, req.body);
      return Responses.Success(res, 200, 'Profile Picture Updated', response[1][0]);
    } catch (error) {
      return Responses.Error(res, 500, error.message);
    }
  }
}

export default ProfileController;
