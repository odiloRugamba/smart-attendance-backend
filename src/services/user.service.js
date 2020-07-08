/* eslint-disable no-useless-catch */
import models from '../database/models';

const { User } = models;

/**
 * Class User services creates a middleware
 */
class UserServices {
  /**
   * findUserByEmail - used to get user from database by email
   * @param {string} email - email of the user
   * @returns {object} user data from database
   */
  static async findUserByEmail(email) {
    const user = await User.findOne({ where: { email } });
    if (!user) return null;
    const lastLogin = new Date().toISOString();
    await User.update({ lastLogin }, { where: { email } });
    return user;
  }

  /**
   *
   * @param {string} email
   * @returns {obj} record is object if email found or null if not
   */
  static async findByEmail(email) {
    try {
      const record = await User.findOne({ where: { email } });
      return record;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   *
   * @param {string} options
   * @returns {obj} record is object if email found or null if not
   */
  static async findAll() {
    try {
      const record = await User.findAll({
        attributes: { exclude: ['password', 'emailNotification', 'social_id', 'lastLogin'] }
      });
      return record;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Get user by email if exists
   * @param {string} param email to be checked against
   * @return {object} Oject of user if found
   */
  static async findUser(param) {
    try {
      const user = await User.findOne({ where: param });

      return user;
    } catch (error) {
      throw error;
    }
  }

  /**
   *
   * @param {string} param
   * @returns {obj} record is object if email found or null if not
   */
  static async getProfile(param) {
    try {
      const record = await User.findOne({
        where: { id: param },
        attributes: { exclude: ['password', 'emailNotification', 'social_id', 'lastLogin'] }
      });
      return record;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   *
   * @param {object} userField
   *
   * @param {object} changes to update for user
   *
   * @returns {object} updated user
   */
  static async update(userField, changes) {
    try {
      return await User.update(changes, {
        returning: true,
        where: userField
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  /**
   *
   * @param {object} fields
   *
   * @returns {object} created user
   */
  static async create(fields) {
    try {
      return await User.create(fields);
    } catch (e) {
      throw new Error(e);
    }
  }

  /**
   *
   * @param {object} userId
   *
   * @param {object} profileData to update for user
   *
   * @returns {object} updated user
   */
  static async updateOrCreate(userId, profileData = null) {
    try {
      // Updated profile by userId
      const updatedProfile = await User.update(profileData, {
        where: { id: userId }
      });
      return updatedProfile;
    } catch (error) {
      throw error;
    }
  }

  /**
   *
   * @param {object} userEmail
   *
   * @param {object} profileData to update for user
   *
   * @returns {object} updated user
   */
  static async verify(userEmail, profileData = null) {
    try {
      // Updated profile by userId
      const updatedProfile = await User.update(profileData, {
        where: { email: userEmail }
      });
      return updatedProfile;
    } catch (error) {
      throw error;
    }
  }

  /**
   *
   * @param {object} user
   *
   * @param {object} image to update for user
   *
   * @returns {object} updated user
   */
  static async updateOrCreatePicture(user, image) {
    try {
      const updatedProfile = await User.update(image, {
        where: { user },
        returning: true
      });
      return updatedProfile;
    } catch (error) {
      throw error;
    }
  }

  /**
   * @name GetUserById
   * @description Interacts with model to find a single user
   * @param { string } id the user's id
   * @returns {object} return the user's data
   */
  static async getUserById(id) {
    const user = await User.findByPk(
      id,
      {
        attributes: [
          'firstName',
          'userNasme',
          'phone',
          'lastName',
          'email',
          'isVerified',
          'dob',
          'address',
          'lineManager',
          'gender',
          'lastLogin',
          'role',
          'phone',
          'rememberMe'
        ],
        include: ['LineManager'],
      },
    );
    return user;
  }

  /**
   * @param {integer} id
   * @param {string} role
   * @returns {obj} record is object if id found or null if not
   */
  static async findByIdAndRole(id, role) {
    try {
      const record = await User.findOne({ where: { id, role } });

      return record;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * @param {integer} socialId user id
   * @returns {obj} record is object if id found or null if not
   */
  static async findSocialUser(socialId) {
    try {
      const record = await User.findOne({ where: { social_id: socialId } });

      return record;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default UserServices;
