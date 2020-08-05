import express from 'express';
import dotenv from 'dotenv';
import {
  create,
  update
} from '../../controller/School';
import {
    verifyToken,
  } from '../../middleware/authenticate';
import {
  createSchoolValidation,
  updateSchoolValidation
} from '../../Validation/validation/school'


dotenv.config();

const router = express();

router.post('/', verifyToken, SchoolCtrl.create);
router.get('/', verifyToken, SchoolCtrl.getAll);
router.get('/:id', verifyToken, SchoolCtrl.getSchoolById);
router.put('/:schoolId', verifyToken, SchoolCtrl.update);
 

export default router;
