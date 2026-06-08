const mongoose = require('mongoose');

const gymSchema = new mongoose.Schema({
  ownerId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  name: { 
    type: String, 
    required: true 
  },
  location: {
    type: { 
      type: String, 
      enum: ['Point'], 
      default: 'Point' 
    },
    coordinates: { 
      type: [Number], // [longitude, latitude]
      required: true 
    }
  },
  address: {
    type: String
  },
  facilities: [{
    type: String
  }],
  images: [{
    type: String // URLs from Cloudinary
  }],
  isActive: { 
    type: Boolean, 
    default: false 
  }
}, { timestamps: true });

// Create geospatial index for location-based searching
gymSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Gym', gymSchema);
