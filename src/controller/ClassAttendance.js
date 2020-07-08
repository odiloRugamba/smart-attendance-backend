import ClassAttendanceService from '../services/ClassAttendance';
import helpers from '../Utils';


const {
  Responses,
} = helpers;

class ClassAttendance {

  static async getAll(req, res) {
    const classAttendances = await ClassAttendanceService.getAll();
    return Responses.Success(res, 200, 'successfully retrieved all class Attendances requested', classAttendances);
  }

  static async getClassAttendanceById(req, res) {
    const { id } = req.params;

    const classAttendance = await ClassAttendanceService.getProfile(id);
    return Responses.Success(res, 200, 'successfully retrieved class attendance requested', classAttendance);
  }

  static async update(req, res, next) {
    try {
      const { id } = req.para.ClassAttendance;
      const classAttendance = await ClassAttendanceService.update(id, req.body);
      return Responses.Success(res, 200, 'classAttendance successfully Updated', classAttendance);
    } catch (error) {
      return next(error);
    }
  }

  static async create(req, res) {
    try {
      const result = await ClassAttendanceService.create(req.body);
      return res.status(201).json({ status: 201, message: "Class Teacher created", result });
    } catch (err) {
      return Responses.Error(res, 500, 'Internal Server Error');
    }
  } 
  
  static async update(req, res, next) {
    try {
      const { id } = req.params.classAttendanceId;
      const classAttendance = await ClassAttendanceService.delete(id);
      return Responses.Success(res, 200, 'Class Attendance successfully deleted', classAttendance);
    } catch (error) {
      return next(error);
    }
  }
}

export default ProfileController;