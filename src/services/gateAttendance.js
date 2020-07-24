/* eslint-disable no-useless-catch */
import models from '../database/models';

const { GateAttendance } = models;

/**
 * Class GateAttendance services creates a middleware
 */
class GateAttendanceServices {
  static async getGateAttendance(param) {
    try {
      const gateAttendance = await GateAttendance.findOne({ where: param });
      return gateAttendance;
    } catch (error) {
      throw error;
    }
  }


  static async getAllGateAttendances(param) {
    try {
      const gateAttendances = await GateAttendance.findAll({ where: param });
      return gateAttendances;
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {
    try {
      return await GateAttendance.create(data);
    } catch (e) {
      throw new Error(e);
    }
  }

  static async delete(id) {
    try {
      return await GateAttendance.destroy(id);
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default GateAttendanceServices;
