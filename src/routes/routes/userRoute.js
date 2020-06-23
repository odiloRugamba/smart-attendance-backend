import express from 'express';
import dotenv from 'dotenv';
import UserController from '../../controller/UserContoller';
import middlewares from '../../middleware/authenticate';
import Validator from '../../Validation/Validation';

dotenv.config();

const router = express();
const {
  verifyToken,
} = middlewares;

const {
  userValidate,
  loginValidate
} = Validator;
const {
  signUp,
  login,
  logout,
  sendResetLink,
  ResendLink,
  resetPassword,
  userVerification
} = UserController;

router.post('/signup', userValidate, signUp);
router.post('/login', loginValidate, login);
router.post('/forget', sendResetLink);
router.post('/resend', ResendLink);
router.patch('/reset', verifyToken, resetPassword);
router.post('/logout', verifyToken, logout);
router.patch('/reset/:email/:token', resetPassword);
router.patch('/confirmEmail/:token', userVerification);

 

export default router;
