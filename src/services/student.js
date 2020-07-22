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

  static async create(student) {
    try {
      const {
              firstName,
              lastName,
              gender,
              dob,
              disability,
              villageId,
              schoolId,
              classId,
              enrollmentYear,
              guardianFirstName,
              guardianLastName,
              guardianPhone,
              guardianEmail,
              guardianRelationship
            } = student
      let guardian = await models.Guardian.findOne({where: {phone: student.guardianPhone, email: student.guardianEmail}});
      if(!guardian){
            guardian = await models.Guardian.create({
              firstName: guardianFirstName,
              lastName: guardianLastName,
              email: guardianEmail,
              phone: guardianPhone,
            });
      }
      const createdStudent = await Student.create({
        firstName,
        lastName,
        gender,
        dob,
        disability,
        villageId
      });
      await models.StudentGuardian.create({
        studentId: createdStudent.id,
        guardianId: guardian.id,
        relationship: guardianRelationship
      });
      
      await models.ClassStudent.create({
        studentId: createdStudent.id,
        classId: classId,
        schoolYear: enrollmentYear
      });
      await models.SchoolStudent.create({
        studentId: createdStudent.id,
        schoolId: schoolId,
        entryYear: enrollmentYear
      });
      
      return student;
    } catch (e) {
      console.log(e)
      throw new Error(e);
    }
  }

  static async delete(id) {
    try {
      return await Student.destroy({where: {id}});
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default StudentServices;
