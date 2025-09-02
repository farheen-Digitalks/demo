import express from 'express';
const router = express.Router();
import {
    createUser,
    loginUser,
    getAllUsers
} from '../controllers/user.js';

router.post('/login', loginUser);
router.post('/register', createUser);;
router.get('/', getAllUsers);

export default router;