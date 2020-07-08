/* eslint-disable no-useless-catch */
import models from '../database/models';

const { Student } = models;

/**
 * Class Student services creates a middleware
 */
class StudentServices {


  static async getStudentById(id) {
    try {
      const student = await Student.findOne({ where: { id } });
      return student;
    } catch (error) {
      throw error;
    }
  }


  static async getStudent(param) {
    try {
      const student = await Student.findOne({ where: param });
      return student;
    } catch (error) {
      throw error;
    }
  }


  static async getAllStudents(param) {
    try {
      const students = await Student.findAll({ where: param });
      return students;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, changes) {
    try {
      return await Student.update(changes, {
        returning: true,
        where: id
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  static async create(data) {
    try {
      return await Student.create(data);
    } catch (e) {
      throw new Error(e);
    }
  }

  static async delete(id) {
    try {
      return await Student.destroy(id);
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default StudentServices;
