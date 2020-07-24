import express from 'express';
import dotenv from 'dotenv';
import StaffCtrl from '../../controller/Staff';
import middlewares from '../../middleware/authenticate';

dotenv.config();

const router = express();
const {
  verifyToken,
} = middlewares;


router.post('/', verifyToken, StaffCtrl.create);
router.get('/:schoolId', verifyToken, StaffCtrl.getStaffBySchoolId);
router.put('/:staffId', verifyToken, StaffCtrl.update);
router.delete('/:staffId', verifyToken, StaffCtrl.delete);


export default router;
