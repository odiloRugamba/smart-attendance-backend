/* eslint-disable no-useless-catch */
import models from '../database/models';

const { Class } = models;

/**
 * Class Class services creates a middleware
 */
class ClassServices {


  static async getAll(params) {
    try {
      const cl = await Class.findAll({ where: params });
      return cl;
    } catch (error) {
      throw error;
    }
  }

  static async getStudents(param) {
    try {
      return await models.Student.findAll({
        where: param
      });
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {
    try {
      return await Class.create(data);
    } catch (e) {
      throw new Error(e);
    }
  }

  static async update(id, changes) {
    try {
      return await Class.update(changes, {
        returning: true,
        where: {id}
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  static async delete(param) {
    try {
      return await Class.destroy({where: param});
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default ClassServices;
