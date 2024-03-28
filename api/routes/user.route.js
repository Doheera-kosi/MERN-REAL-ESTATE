import express from 'express';
import { testing, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/testing', testing)

router.post('/update/:id', verifyToken, updateUser )

export default router;