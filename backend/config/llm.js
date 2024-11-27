const axios = require('axios');

const { GoogleGenerativeAI } = require("@google/generative-ai");
const apiKey = 'AIzaSyB-gYeps1h7YUPOSCNIDtB0Z4zBGDLzhoA';

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

exports.generateNextQuestion = async (previousQuestion,userResponse) => {
    
    const prompt = `Question: "${previousQuestion}" User's response: "${userResponse}". Generate a new and unique survey question that explores a different aspect of the topic. Ensure the next question is distinct from previously asked questions and does not repeat the same content.`;

    console.log(prompt,apiKey)
    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log(text)
        return text;
    } catch (error) {
        console.error('Error generating question:', error);
        throw error;
    }
};
