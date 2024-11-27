const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    question: { type: String, required: true },
    response: { type: String },
    createdAt: {type: Date,default: Date.now,},
});

module.exports = mongoose.model('Survey', surveySchema);
