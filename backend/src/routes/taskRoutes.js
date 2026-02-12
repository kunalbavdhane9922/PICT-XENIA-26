import express from 'express';
import {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
} from '../controllers/taskController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// All task routes are protected
router.use(protect);

router
    .route('/')
    .get(getAllTasks)
    .post(createTask);

router
    .route('/:id')
    .get(getTask)
    .patch(updateTask)
    .delete(deleteTask);

export default router;
