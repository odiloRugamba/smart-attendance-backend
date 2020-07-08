import ClassTeacherService from '../services/classTeacher';
import helpers from '../Utils';

const {
  Responses,
} = helpers;

class ClassTeacher {

  static async getTeacherClasses(req, res) {
    const userId = req.params.userId; 
    const classes = await ClassTeacherService.getTeacherClasses(userId);
    return Responses.Success(res, 200, 'successfully retrieved all classes requested', classes);
  }

  static async getTeachers(req, res) {
    const schoolId = req.params.schoolId; 
    const teachers = await ClassTeacherService.getTeachers(schoolId);
    return Responses.Success(res, 200, 'successfully retrieved all teachers requested', teachers);
  }

  static async getClassTeachers(req, res) {
    const classId = req.params.classId; 
    const teachers = await ClassTeacherService.getClassTeachers(classId);
    return Responses.Success(res, 200, 'successfully retrieved teachers requested', teachers);
  }

  static async create(req, res) {
    try {
      const {
        classId,
        userId
      } = req.body;
      const classTeacher = await ClassTeacherService.create({classId,userId});
      return res.status(201).json({ status: 201, message: "Class Teacher created", classTeacher });
    } catch (err) {
      return Responses.Error(res, 500, 'Internal Server Error');
    }
  } 
  
  static async delete(req, res, next) {
    try {
      const classTeacherId = req.params.classTeacherId;
      const classTeacher = await ClassTeacherService.delete(classTeacherId);
      return Responses.Success(res, 200, 'class teacher successfully deleted', classTeacher);
    } catch (error) {
      return next(error);
    }
  }
}

export default ClassTeacher;
