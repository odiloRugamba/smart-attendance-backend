/* eslint-disable no-useless-catch */
import models from '../database/models';

const { ClassAttendance } = models;

/**
 * Class ClassAttendance services creates a middleware
 */
class ClassAttendanceServices {


  static async getClassAttendance(param) {
    try {
      const classAttendance = await ClassAttendance.findOne({ where: param });
      return classAttendance;
    } catch (error) {
      throw error;
    }
  }

  static async getAllClassAttendances(param) {
    try {
      const classAttendances = await ClassAttendance.findAll({ where: param });
      return classAttendances;
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {
    try {
      return await ClassAttendance.create(data);
    } catch (e) {
      throw new Error(e);
    }
  }

  static async delete(id) {
    try {
      return await ClassAttendance.destroy(id);
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default ClassAttendanceServices;
