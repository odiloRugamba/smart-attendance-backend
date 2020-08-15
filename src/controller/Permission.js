import PermissionService from '../services/permission';
import helpers from '../Utils';

const {
  Responses,
} = helpers;

class Permission {
  static async getPermissions(req, res) {
    const { schoolId } = req.params;
    const permissions = await PermissionService.getPermissions({ schoolId });
    return Responses.Success(res, 200, 'successfully retrieved all Permissiones requested', permissions);
  }


  static async create(req, res) {
    try {
      const {
        leavingTime,
        expectedBackTime,
        realBackTime,
        isBack,
        reason,
        issuedBy,
        markedBackBy,
        requesterName,
        requesterPhone,
        requesterRelationship,
        studentId,
        schoolId
      } = req.body;
      const data = await PermissionService.create(req.body);

      return res.status(201).json({ status: 201, message: 'Permission created', data });
    } catch (err) {
      console.log(err);
      return Responses.Error(res, 500, 'Internal Server Error');
    }
  }

  static async update(req, res, next) {
    try {
      const id = req.params.permissionId;
      const cl = await PermissionService.update(id, req.body);
      return Responses.Success(res, 200, 'Permission successfully Updated', cl);
    } catch (error) {
      return next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const id = req.params.permissionId;
      const cl = await PermissionService.delete({ id });
      return Responses.Success(res, 200, 'Permission successfully deleted', cl);
    } catch (error) {
      return next(error);
    }
  }
}

export default Permission;

