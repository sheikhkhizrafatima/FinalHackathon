import express from 'express';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  updateTaskStatus
} from '../controllers/taskController.mjs';
import { authenticate } from '../middleware/authMiddleware.mjs';

const router = express.Router();

// Get all tasks
router.get('/', getTasks);

// Create a new task
router.post('/', createTask);

// Update a task
router.put('/:id', updateTask);

// Delete a task
router.delete('/:id', deleteTask);

// Update task status
router.patch('/:id/status', updateTaskStatus);

export default router;