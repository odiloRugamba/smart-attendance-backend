import { Router } from 'express';
import adminRoute from './adminRoute';
import authUser from './userRoute';
import profileRoute from './profileRoute';

const router = Router();

router.use('/account/admin', adminRoute);
router.use('/auth', authUser);
router.use('/profile', profileRoute);
router.use('/schools', require("./school"));
router.use('/staffs', require("./staff"));
router.use('/classes', require("./class"));
router.use('/teachers', require("./classTeacher"));
router.use('/students', require("./student"));
 
export default router;
