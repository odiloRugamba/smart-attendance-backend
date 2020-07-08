/* eslint-disable no-useless-catch */
import models from '../database/models';

const { ClassTeacher } = models;

/**
 * Class ClassTeacher services creates a middleware
 */
class ClassTeacherServices {


  static async getTeacherClasses(userId) {
    try {
      return await ClassTeacher.findAll({
        where: {userId},
        include: {
          model: models.Class,
          attributes: ['id','level','year','combination','label']
        },
        attributes: ['id']
      });
    } catch (error) {
      throw error;
    }
  }

  static async getTeachers(schoolId) {
    try {
      return await models.Staff.findAll({
        where: {role: "TEACHER", schoolId},
        include: {
          model: models.User,
          attributes: ['id','firstName','lastName','email','phone']
        }
      });
    } catch (error) {
      throw error;
    }
  }

  static async getClassTeachers(classId) {
    try {
      return await ClassTeacher.findAll({
        where: {classId},
        include: {
          model: models.User,
          attributes: ['id','firstName','lastName','email','phone']
        },
        attributes: ['id','classId']
      });
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {
    try {
      return await ClassTeacher.create(data);
    } catch (e) {
      throw new Error(e);
    }
  }

  static async delete(id) {
    try {
      return await ClassTeacher.destroy({where: {id}});
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default ClassTeacherServices;
