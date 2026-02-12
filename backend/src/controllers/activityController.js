import Activity from '../models/Activity.js';

export const getAllActivities = async (req, res) => {
    try {
        const activities = await Activity.find({ userId: req.user._id });
        res.status(200).json({
            status: 'success',
            data: { activities }
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        });
    }
};

export const createActivity = async (req, res) => {
    try {
        const newActivity = await Activity.create({
            ...req.body,
            userId: req.user._id
        });
        res.status(201).json({
            status: 'success',
            data: { activity: newActivity }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};
