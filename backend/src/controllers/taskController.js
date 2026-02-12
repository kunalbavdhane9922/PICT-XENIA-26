import Task from '../models/Task.js';

export const getAllTasks = async (req, res) => {
    try {
        // Data Isolation: Fetch tasks only for the logged-in user
        const tasks = await Task.find({ userId: req.user._id });

        res.status(200).json({
            status: 'success',
            results: tasks.length,
            data: {
                tasks
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        });
    }
};

export const createTask = async (req, res) => {
    try {
        // Set userId from the authenticated user
        const newTask = await Task.create({
            ...req.body,
            userId: req.user._id
        });

        res.status(201).json({
            status: 'success',
            data: {
                task: newTask
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

export const getTask = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, userId: req.user._id });

        if (!task) {
            return res.status(404).json({
                status: 'fail',
                message: 'No task found with that ID'
            });
        }

        res.status(200).json({
            status: 'success',
            data: {
                task
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        });
    }
};

export const updateTask = async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id, userId: req.user._id },
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!task) {
            return res.status(404).json({
                status: 'fail',
                message: 'No task found with that ID or you do not have permission'
            });
        }

        res.status(200).json({
            status: 'success',
            data: {
                task
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user._id });

        if (!task) {
            return res.status(404).json({
                status: 'fail',
                message: 'No task found with that ID or you do not have permission'
            });
        }

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        });
    }
};
