/**
 * Band Model
 * 
 * Defines the schema for musical bands/ensembles in the application.
 */

const mongoose = require('mongoose');

const bandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Band name is required'],
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  members: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    role: {
      type: String,
      enum: ['leader', 'member', 'manager'],
      required: true
    },
    instrument: {
      type: String,
      trim: true
    },
    joinedAt: {
      type: Date,
      default: Date.now
    },
    permissions: {
      createRehearsals: {
        type: Boolean,
        default: false
      },
      editRehearsals: {
        type: Boolean,
        default: false
      },
      deleteRehearsals: {
        type: Boolean,
        default: false
      },
      inviteMembers: {
        type: Boolean,
        default: false
      },
      removeMembers: {
        type: Boolean,
        default: false
      },
      createSetlists: {
        type: Boolean,
        default: false
      },
      editSetlists: {
        type: Boolean,
        default: false
      }
    }
  }],
  genre: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  logo: {
    type: String
  },
  socialLinks: {
    website: String,
    facebook: String,
    instagram: String,
    twitter: String,
    youtube: String,
    spotify: String,
    soundcloud: String
  },
  settings: {
    rehearsalReminders: {
      enabled: {
        type: Boolean,
        default: true
      },
      timeBeforeInHours: {
        type: Number,
        default: 24
      }
    },
    defaultRehearsalDuration: {
      type: Number,
      default: 120 // in minutes
    },
    attendanceTracking: {
      enabled: {
        type: Boolean,
        default: true
      },
      requireReason: {
        type: Boolean,
        default: false
      }
    },
    defaultVenueId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Venue'
    }
  },
  inviteCodes: [{
    code: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    expiresAt: {
      type: Date,
      required: true
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    role: {
      type: String,
      enum: ['leader', 'member', 'manager'],
      default: 'member'
    },
    used: {
      type: Boolean,
      default: false
    }
  }]
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for upcoming rehearsals
bandSchema.virtual('upcomingRehearsals', {
  ref: 'Rehearsal',
  localField: '_id',
  foreignField: 'bandId',
  options: {
    match: { startTime: { $gte: new Date() } },
    sort: { startTime: 1 },
    limit: 10
  }
});

// Method to check if a user is a member of the band
bandSchema.methods.isMember = function(userId) {
  return this.members.some(member => member.userId.toString() === userId.toString());
};

// Method to check if a user is a leader of the band
bandSchema.methods.isLeader = function(userId) {
  return this.members.some(
    member => member.userId.toString() === userId.toString() && member.role === 'leader'
  );
};

// Method to get member details
bandSchema.methods.getMember = function(userId) {
  return this.members.find(member => member.userId.toString() === userId.toString());
};

// Create indexes for faster queries
bandSchema.index({ name: 'text', description: 'text' });
bandSchema.index({ 'members.userId': 1 });

const Band = mongoose.model('Band', bandSchema);

module.exports = Band;