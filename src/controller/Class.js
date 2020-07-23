import ClassService from '../services/class';
import helpers from '../Utils';

const {
  Responses,
} = helpers;

class Class {
  static async getClassesByScholl(req, res) {
    const { schoolId } = req.params;
    const classes = await ClassService.getAll({ schoolId });
    return Responses.Success(res, 200, 'successfully retrieved all Classes requested', classes);
  }

  static async getStudents(req, res) {
    const { classId } = req.params;

    const students = await ClassService.getStudents({ classId });
    return Responses.Success(res, 200, 'successfully retrieved students requested', students);
  }

  static async create(req, res) {
    try {
      const {
        schoolId,
        level,
        year,
        combination,
        label
      } = req.body;
      const data = await ClassService.create({
        schoolId, level, year, combination, label
      });

      return res.status(201).json({ status: 201, message: 'Class created', data });
    } catch (err) {
      return Responses.Error(res, 500, 'Internal Server Error');
    }
  }

  static async update(req, res, next) {
    try {
      const id = req.params.classId;
      const {
        level,
        year,
        combination,
        label
      } = req.body;
      const cl = await ClassService.update(id, {
        level, year, combination, label
      });
      return Responses.Success(res, 200, 'Class successfully Updated', cl);
    } catch (error) {
      return next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const id = req.params.classId;
      const cl = await ClassService.delete({ id });
      return Responses.Success(res, 200, 'Class successfully deleted', cl);
    } catch (error) {
      return next(error);
    }
  }
}

export default Class;

