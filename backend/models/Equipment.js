const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
  gymId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Gym', 
    required: true 
  },
  name: { 
    type: String, 
    required: true 
  },
  category: { 
    type: String, 
    enum: ['Cardio', 'Machine', 'Free Weight', 'Other'] 
  },
  quantity: { 
    type: Number, 
    default: 1 
  },
  image: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Equipment', equipmentSchema);
