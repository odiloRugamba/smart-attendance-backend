/* eslint-disable no-useless-catch */
import models from '../database/models';

const { School } = models;

/**
 * Class School services creates a middleware
 */
class SchoolServices {
  static async getSchoolById(id) {
    try {
      const school = await School.findOne({ where: { id } });
      return school;
    } catch (error) {
      throw error;
    }
  }


  static async getSchool(param) {
    try {
      const school = await School.findOne({ where: param });
      return school;
    } catch (error) {
      throw error;
    }
  }


  static async getAll(param) {
    try {
      const schools = await School.findAll({ where: param });
      return schools;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, changes) {
    try {
      return await School.update(changes, {
        returning: true,
        where: { id }
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  static async create(data) {
    try {
      return await School.create(data);
    } catch (e) {
      throw new Error(e);
    }
  }

  static async delete(id) {
    try {
      return await School.destroy(id);
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default SchoolServices;
