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

router.get('/Users', verifyToken, authorize(['super-administator', 'head-master']), fetchAllUsers);
router.get('/:id', verifyToken, getUserProfile);
router.patch('/:id', verifyToken, updateProfile);

export default router;
