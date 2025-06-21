/**
 * User Model
 * 
 * Defines the schema for users in the application.
 */

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters long'],
    select: false // Don't include password in query results by default
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  role: {
    type: String,
    enum: ['member', 'leader', 'admin'],
    default: 'member'
  },
  profilePicture: {
    type: String
  },
  preferences: {
    notifications: {
      email: {
        enabled: { type: Boolean, default: true },
        rehearsalReminder: { type: Boolean, default: true },
        scheduleChanges: { type: Boolean, default: true },
        newMessages: { type: Boolean, default: true }
      },
      push: {
        enabled: { type: Boolean, default: true },
        rehearsalReminder: { type: Boolean, default: true },
        scheduleChanges: { type: Boolean, default: true },
        newMessages: { type: Boolean, default: true }
      },
      sms: {
        enabled: { type: Boolean, default: false },
        rehearsalReminder: { type: Boolean, default: false },
        scheduleChanges: { type: Boolean, default: false }
      }
    },
    timezone: {
      type: String,
      default: 'UTC'
    },
    calendarView: {
      type: String,
      enum: ['week', 'month', 'agenda'],
      default: 'week'
    },
    theme: {
      type: String,
      enum: ['light', 'dark', 'system'],
      default: 'system'
    }
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date
}, {
  timestamps: true
});

// Pre-save hook to hash password before saving
userSchema.pre('save', async function(next) {
  // Only hash the password if it's modified or new
  if (!this.isModified('password')) return next();
  
  try {
    // Generate salt
    const salt = await bcrypt.genSalt(10);
    // Hash password with salt
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to check if password matches
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Method to get user's full name
userSchema.methods.getFullName = function() {
  return this.name;
};

// Create virtual for user's bands
userSchema.virtual('bands', {
  ref: 'Band',
  localField: '_id',
  foreignField: 'members.userId'
});

// Create a compound index on email for faster lookups
userSchema.index({ email: 1 });

const User = mongoose.model('User', userSchema);

module.exports = User;