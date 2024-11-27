import React, { useState } from 'react';
import axios from 'axios';

const Survey = () => {
    const [questions, setQuestions] = useState([]);
    const [currentAnswer, setCurrentAnswer] = useState('');

    const fetchNextQuestion = async (response) => {
        try {
            const pre = questions[questions.length - 1]?.question; // Get the last question asked
            const res = await axios.post('http://localhost:5000/api/survey/nextQuestion', { response, pre });
            
            setQuestions([...questions, { question: res.data.question, response }]);
        } catch (error) {
            console.error('Error fetching the next question:', error);
        }
    };

    const handleAnswerSubmit = (e) => {
        e.preventDefault();
        fetchNextQuestion(currentAnswer);  // Send the current answer to the backend
        setCurrentAnswer('');  // Clear the input field after submission
    };

    const startSurvey = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/survey/start');
            setQuestions([{ question: res.data.question, response: '' }]);  // Start the survey with the first question
        } catch (error) {
            console.error('Error starting the survey:', error);
        }
    };

    return (
        <div>
            {questions.length === 0 && <button onClick={startSurvey}>Start Survey</button>}

            {questions.map((q, index) => (
                <div key={index}>
                    <p>{q.question}</p>
                    {index === questions.length - 1 && (
                        <form onSubmit={handleAnswerSubmit}>
                            <input
                                type="text"
                                value={currentAnswer}
                                onChange={(e) => setCurrentAnswer(e.target.value)}
                                required
                            />
                            <button type="submit">Next</button>
                        </form>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Survey;
