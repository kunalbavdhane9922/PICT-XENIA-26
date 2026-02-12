import express from 'express';
import cors from 'cors';
import authRouter from './routes/authRoutes.js';
import taskRouter from './routes/taskRoutes.js';
import activityRouter from './routes/activityRoutes.js';

const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/tasks', taskRouter);
app.use('/api/v1/activities', activityRouter);

// Undefined routes handler
app.all('*', (req, res) => {
    res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.originalUrl} on this server!`
    });
});

export default app;
