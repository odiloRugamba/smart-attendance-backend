import StudentService from '../services/student';
import helpers from '../Utils';
import { upload } from '../Utils/ImageUploader';


const {
  Responses,
} = helpers;

class Student {
  static async getStudentsBySchool(req, res) {
    const { schoolId } = req.params;
    const students = await StudentService.getAll(schoolId);
    return Responses.Success(res, 200, 'successfully retrieved all students requested', students);
  }

  static async getStudentById(req, res) {
    const { id } = req.params;

    const student = await StudentService.getProfile(id);
    return Responses.Success(res, 200, 'successfully retrieved Student requested', student);
  }

  static async update(req, res, next) {
    try {
      const { id } = req.para.Student;
      const student = await StudentService.update(id, req.body);
      return Responses.Success(res, 200, 'Student successfully Updated', student);
    } catch (error) {
      return next(error);
    }
  }

  static async create(req, res) {
    try {
      const result = await StudentService.create(req.body);

      return res.status(201).json({ status: 201, message: 'Student created', result });
    } catch (err) {
      return Responses.Error(res, 500, 'Internal Server Error');
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params.Student;
      const cl = await StudentService.delete(id);
      return Responses.Success(res, 200, 'Student successfully deleted', cl);
    } catch (error) {
      return next(error);
    }
  }
}

export default Student;
