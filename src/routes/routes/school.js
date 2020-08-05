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

router.post('/', verifyToken, createSchoolValidation, create);
router.put('/:schoolId', verifyToken,updateSchoolValidation, update);
 

export default router;
