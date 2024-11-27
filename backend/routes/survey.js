const express = require('express');
const { startSurvey, getNextQuestion } = require('../controllers/surveyController');

const router = express.Router();

router.get('/start', startSurvey);
router.post('/nextQuestion', getNextQuestion);

module.exports = router;
