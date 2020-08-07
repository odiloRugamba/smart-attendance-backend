import express from 'express';
import dotenv from 'dotenv';
import {
  signUp,
  login,
  logout,
  sendResetLink,
  ResendLink,
  resetPassword,
  userVerification
} from '../../controller/UserContoller';
import {
  verifyToken
} from '../../middleware/authenticate';
import {
  userValidate,
  loginValidate
} from '../../Validation/validation/user';

dotenv.config();

const router = express();

router.post('/signup', userValidate, signUp);
router.post('/login', loginValidate, login);
router.post('/forget', sendResetLink);
router.patch('/reset', verifyToken, resetPassword);
router.post('/logout', verifyToken, logout);
router.patch('/reset/:email/:token', resetPassword);
router.patch('/confirmEmail/:token', userVerification);

 

export default router;
