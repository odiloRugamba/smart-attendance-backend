import express from 'express';
import dotenv from 'dotenv';

import {
    verifyToken
  } from '../../middleware/authenticate';

import {
  createSchoolValidation,
  updateSchoolValidation
} from '../../Validation/validation/school'

import SchoolCtrl from '../../controller/School'

dotenv.config();

const router = express();

router.post('/', verifyToken, SchoolCtrl.create);
router.get('/', verifyToken, SchoolCtrl.getAll);
router.get('/:id', verifyToken, SchoolCtrl.getSchoolById);
router.put('/:schoolId', verifyToken, SchoolCtrl.update);
router.delete('/:schoolId', verifyToken, SchoolCtrl.delete);
 

export default router;
