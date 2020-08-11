/* eslint-disable no-useless-catch */
import models from '../database/models';

const { Permission } = models;

/**
 * Permission Permission services creates a middleware
 */
class PermissionServices {
  static async getPermissions(params) {
    try {
      return await Permission.findAll({
          where: params,
          include: {
              model: models.Student,
              attributes: ['firstName','lastName','gender'],
              include: {
                  model: models.Class,
                  attributes: ['level','year','combination','label']
              }
          }
      });
    } catch (error) {
      throw error;
    }
  }


  static async create(data) {
    try {
      return await Permission.create(data);
    } catch (e) {
      throw new Error(e);
    }
  }

  static async update(id, changes) {
    try {
      return await Permission.update(changes, {
        returning: true,
        where: { id }
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  static async delete(param) {
    try {
      return await Permission.destroy({ where: param });
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default PermissionServices;
