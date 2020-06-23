import { Router } from 'express';
import adminRoute from './adminRoute';
import authUser from './userRoute';
import profileRoute from './profileRoute';

const router = Router();

router.use('/account/admin', adminRoute);
router.use('/auth', authUser);
router.use('/profile', profileRoute);
 
export default router;
