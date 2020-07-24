/* eslint-disable no-useless-catch */
import models from '../database/models';

const { Staff } = models;

/**
 * Class Staff services creates a middleware
 */
class StaffServices {
  static async getStaffById(id) {
    try {
      const staff = await Staff.findOne({
        include: {
          model: models.User,
          attributes: ['firstName', 'lastName', 'email', 'phone']
        },
        where: {
          id
        }
      });
      return staff;
    } catch (error) {
      throw error;
    }
  }


  static async getOne(param) {
    try {
      const staff = await Staff.findOne({
        include: {
          model: models.User,
          attributes: ['firstName', 'lastName', 'email', 'phone']
        },
        where: param
      });
      return staff;
    } catch (error) {
      throw error;
    }
  }


  static async getAll(param) {
    try {
      const staffs = await Staff.findAll({
        include: {
          model: models.User,
          attributes: ['firstName', 'lastName', 'email', 'phone']
        },
        where: param,
        attributes: ['id', 'schoolId', 'userId', 'role', 'createdAt']
      });
      return staffs;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, changes) {
    try {
      return await Staff.update(changes, {
        returning: true,
        where: { id }
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  static async create(data) {
    try {
      return await Staff.create(data);
    } catch (e) {
      throw new Error(e);
    }
  }

  static async delete(id) {
    try {
      return await Staff.destroy({ where: { id } });
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default StaffServices;
