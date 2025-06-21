/**
 * Rehearsal Model
 * 
 * Defines the schema for band rehearsals in the application.
 */

const mongoose = require('mongoose');

const rehearsalSchema = new mongoose.Schema({
  bandId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Band',
    required: true
  },
  title: {
    type: String,
    required: [true, 'Rehearsal title is required'],
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  startTime: {
    type: Date,
    required: [true, 'Start time is required']
  },
  endTime: {
    type: Date,
    required: [true, 'End time is required']
  },
  venueId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Venue'
  },
  venueDetails: {
    name: String,
    address: String,
    notes: String
  },
  status: {
    type: String,
    enum: ['scheduled', 'canceled', 'completed', 'rescheduled'],
    default: 'scheduled'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  setlistId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Setlist'
  },
  notes: {
    type: String
  },
  isRecurring: {
    type: Boolean,
    default: false
  },
  recurringPattern: {
    frequency: {
      type: String,
      enum: ['daily', 'weekly', 'biweekly', 'monthly'],
    },
    interval: {
      type: Number,
      default: 1
    },
    endDate: {
      type: Date
    },
    daysOfWeek: [{ // For weekly recurrence
      type: Number, // 0-6 (Sunday-Saturday)
    }]
  },
  parentRehearsalId: { // For recurring instances
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rehearsal'
  },
  equipment: [{
    name: {
      type: String,
      required: true
    },
    providedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    notes: String
  }],
  goals: [{
    description: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    }
  }],
  remindersSent: {
    type: Boolean,
    default: false
  },
  recordingUrl: String,
  postRehearsalNotes: String,
  postRehearsalRating: {
    type: Number,
    min: 1,
    max: 5
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for attendance records
rehearsalSchema.virtual('attendance', {
  ref: 'Attendance',
  localField: '_id',
  foreignField: 'rehearsalId'
});

// Virtual for tasks assigned for this rehearsal
rehearsalSchema.virtual('tasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'rehearsalId'
});

// Method to check if rehearsal is upcoming
rehearsalSchema.methods.isUpcoming = function() {
  return this.startTime > new Date() && this.status !== 'canceled';
};

// Method to check if rehearsal can be modified
rehearsalSchema.methods.canModify = function() {
  return this.startTime > new Date() && ['scheduled', 'rescheduled'].includes(this.status);
};

// Method to calculate rehearsal duration in minutes
rehearsalSchema.methods.getDurationMinutes = function() {
  return Math.floor((this.endTime - this.startTime) / (1000 * 60));
};

// Create indexes for faster queries
rehearsalSchema.index({ bandId: 1, startTime: 1 });
rehearsalSchema.index({ status: 1 });
rehearsalSchema.index({ venueId: 1 });

const Rehearsal = mongoose.model('Rehearsal', rehearsalSchema);

module.exports = Rehearsal;