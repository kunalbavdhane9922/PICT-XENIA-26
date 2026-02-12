import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Task must belong to a user']
    },
    title: {
        type: String,
        required: [true, 'Task must have a title'],
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    status: {
        type: String,
        enum: ['todo', 'in-progress', 'completed'],
        default: 'todo'
    },
    energyRequired: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    estimatedTime: {
        type: Number, // in minutes
        default: 30
    },
    completedAt: {
        type: Date
    }
}, {
    timestamps: true
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
