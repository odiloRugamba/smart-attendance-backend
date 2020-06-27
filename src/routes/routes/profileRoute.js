import express from 'express';
import ProfileController from '../../controller/ProfileController';
import authorize from '../../middleware/Authorization';
import middlewares from '../../middleware/authenticate';

const router = express.Router();
const {
  verifyToken
} = middlewares;

const {
  fetchAllUsers, getUserProfile, updateProfile, updateProfileImage
} = ProfileController;

router.get('/Users', verifyToken, fetchAllUsers);
router.get('/:id', verifyToken, getUserProfile);
router.patch('/', verifyToken, updateProfile);

export default router;
