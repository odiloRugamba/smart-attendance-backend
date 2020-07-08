import GateAttendanceService from '../services/GateAttendance';
import helpers from '../Utils';


const {
  Responses,
} = helpers;

class GateAttendance {

  static async getAll(req, res) {
    const gateAttendances = await GateAttendanceService.getAll();
    return Responses.Success(res, 200, 'successfully retrieved all Gate Attendances requested', gateAttendances);
  }

  static async getGateAttendanceById(req, res) {
    const { id } = req.params;

    const gateAttendance = await GateAttendanceService.getProfile(id);
    return Responses.Success(res, 200, 'successfully retrieved gate attendance requested', gateAttendance);
  }

  static async update(req, res, next) {
    try {
      const { id } = req.para.GateAttendance;
      const gateAttendance = await GateAttendanceService.update(id, req.body);
      return Responses.Success(res, 200, 'GateAttendance successfully Updated', gateAttendance);
    } catch (error) {
      return next(error);
    }
  }

  static async create(req, res) {
    try {
      const result = await GateAttendanceService.create(req.body);
      return res.status(201).json({ status: 201, message: "Class Teacher created", result });
    } catch (err) {
      return Responses.Error(res, 500, 'Internal Server Error');
    }
  } 
  
  static async update(req, res, next) {
    try {
      const { id } = req.params.gateAttendanceId;
      const gateAttendance = await GateAttendanceService.delete(id);
      return Responses.Success(res, 200, 'GateAttendance successfully deleted', gateAttendance);
    } catch (error) {
      return next(error);
    }
  }
}

export default ProfileController;