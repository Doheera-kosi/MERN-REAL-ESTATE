import express from 'express';
import { deleteteUser, testing, updateUser, getUserListing, getUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/testing', testing)

router.post('/update/:id', verifyToken, updateUser )
router.delete('/delete/:id', verifyToken, deleteteUser )
router.get('/listings/:id', verifyToken, getUserListing )
router.get('/:id', verifyToken, getUser )

export default router;