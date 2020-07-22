import express from 'express';
import dotenv from 'dotenv';
import StudentCtrl from '../../controller/Student';
import middlewares from '../../middleware/authenticate';

dotenv.config();

const router = express();
const {
  verifyToken,
} = middlewares;


router.post('/', verifyToken, StudentCtrl.create);
// router.get('/:schoolId', verifyToken, StudentCtrl.getStudentBySchoolId);
// router.put('/:StudentId', verifyToken, StudentCtrl.update);
// router.delete('/:StudentId', verifyToken, StudentCtrl.delete);
 

export default router;
