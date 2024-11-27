const Survey = require('../models/Survey');
const axios = require('axios');
const { generateNextQuestion } = require('../config/llm');

exports.startSurvey = async (req, res) => {
    // console.log("Working")
    const previousQuestion = "How often do you exercise?";
    return res.json({ question: previousQuestion });
};

exports.getNextQuestion = async (req, res) => {
    const userResponse = req.body.response;
    const previousQuestion=req.body.pre;
    try {
        const nextQuestion = await generateNextQuestion(previousQuestion,userResponse);
        // Save the response to MongoDB
        const newSurvey = new Survey({
            question: previousQuestion,
            response: userResponse,
        });

        await newSurvey.save();  // Save the survey response to the database
        res.json({ question: nextQuestion });
    } catch (error) {
        res.status(500).json({ error: "Error generating the next question" });
    }
};
