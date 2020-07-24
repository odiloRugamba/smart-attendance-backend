import express from 'express';
import dotenv from 'dotenv';
import SchoolCtrl from '../../controller/School';
import middlewares from '../../middleware/authenticate';

dotenv.config();

const router = express();
const {
  verifyToken,
} = middlewares;


router.post('/', verifyToken, SchoolCtrl.create);
router.get('/', verifyToken, SchoolCtrl.getAll);
router.put('/:schoolId', verifyToken, SchoolCtrl.update);
 

export default router;
