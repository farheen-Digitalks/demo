import { Router } from "express";
const router = Router();

import userRoutes from '../routes/user.js';

router.use('/user', userRoutes);

export default router;