import express from 'express';
import { register, login, getMe } from '../controllers/authController.mjs';
import { validateRegister, validateLogin, authenticate } from '../middleware/authMiddleware.mjs';

const router = express.Router();

// @route   POST api/auth/register
// @desc    Register user
// @access  Public
router.post(
  '/register',
  validateRegister,
  register
);

// @route   POST api/auth/login
// @desc    Login user
// @access  Public
router.post(
  '/login',
  validateLogin,
  login
);

// @route   GET api/auth/me
// @desc    Get current user
// @access  Private
router.get(
  '/me',
  authenticate,
  getMe
);

export default router;