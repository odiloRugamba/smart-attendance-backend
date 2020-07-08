import express from 'express';
import dotenv from 'dotenv';
import ClassTeacherCtrl from '../../controller/ClassTeacher';
import middlewares from '../../middleware/authenticate';

dotenv.config();

const router = express();
const {
  verifyToken,
} = middlewares;


router.post('/', verifyToken, ClassTeacherCtrl.create);
router.get('/:schoolId', verifyToken, ClassTeacherCtrl.getTeachers);
router.get('/:userId/classes', verifyToken, ClassTeacherCtrl.getTeacherClasses);
router.get('/:classId/class-teachers', verifyToken, ClassTeacherCtrl.getClassTeachers);
router.delete('/:classTeacherId', verifyToken, ClassTeacherCtrl.delete);
 

export default router;
