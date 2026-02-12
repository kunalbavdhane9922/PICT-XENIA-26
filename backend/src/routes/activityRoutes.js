import express from 'express';
import { getAllActivities, createActivity } from '../controllers/activityController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.use(protect);

router.route('/')
    .get(getAllActivities)
    .post(createActivity);

export default router;
