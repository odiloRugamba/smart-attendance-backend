import express from 'express';
import Controller from '../../controller/AdminController';
import middlewares from '../../middleware/authenticate';
import authorizeUser from '../../middleware/Authorization';
import Validator from '../../Validation/Validation';

const {
  verifyToken
} = middlewares;
const { assignRole } = Validator;
const router = express.Router();

router.patch('/assignRole', verifyToken, assignRole, authorizeUser(['super-adminstator', 'admin']), Controller.updateUserRole);

export default router;
