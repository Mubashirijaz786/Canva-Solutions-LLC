const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    author: { 
        type: String, 
        required: true 
    },
    role: { 
        type: String, 
        required: true 
    },
    quote: { 
        type: String, 
        required: true 
    },
    rating: { 
        type: Number, 
        required: true,
        min: 1,
        max: 5
    },
    
    status: { 
        type: String, 
        enum: ['Pending', 'Approved', 'Rejected'], 
        default: 'Pending' 
    }
}, { timestamps: true }); 

module.exports = mongoose.model('Review', reviewSchema);