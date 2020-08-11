import express from 'express';
import dotenv from 'dotenv';
import PermissionCtrl from '../../controller/Permission';
import middlewares from '../../middleware/authenticate';
import {
  createPermissionValidation,
  updatePermissionValidation
} from '../../Validation/validation/permission';

dotenv.config();

const router = express();
const {
  verifyToken,
} = middlewares;


router.post('/', verifyToken, createPermissionValidation, PermissionCtrl.create);
router.get('/:schoolId', verifyToken, PermissionCtrl.getPermissions);
router.put('/:permissionId', verifyToken, updatePermissionValidation, PermissionCtrl.update);
router.delete('/:permissionId', verifyToken, PermissionCtrl.delete);
 

export default router;
