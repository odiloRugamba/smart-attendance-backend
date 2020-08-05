import express from 'express';
import dotenv from 'dotenv';
import ClassCtrl from '../../controller/Class';
import middlewares from '../../middleware/authenticate';
import {
  createClassValidation,
  updateClassValidation
} from '../../Validation/validation/class';

dotenv.config();

const router = express();
const {
  verifyToken,
} = middlewares;


router.post('/', verifyToken, createClassValidation, ClassCtrl.create);
router.get('/:schoolId', verifyToken, ClassCtrl.getClassesByScholl);
router.get('/:classId/students', verifyToken, ClassCtrl.getStudents);
router.put('/:classId', verifyToken, updateClassValidation, ClassCtrl.update);
router.delete('/:classId', verifyToken, ClassCtrl.delete);
 

export default router;
