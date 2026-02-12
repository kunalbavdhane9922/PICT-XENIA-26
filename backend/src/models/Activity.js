import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Activity must belong to a user']
    },
    type: {
        type: String,
        enum: ['work', 'break', 'focus', 'idle'],
        required: [true, 'Activity must have a type']
    },
    duration: {
        type: Number, // in minutes
        required: [true, 'Activity must have a duration']
    },
    intensity: {
        type: Number, // 0-100
        default: 50
    },
    startTime: {
        type: Date,
        default: Date.now
    },
    endTime: {
        type: Date
    }
}, {
    timestamps: true
});

const Activity = mongoose.model('Activity', activitySchema);

export default Activity;
