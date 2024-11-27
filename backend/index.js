const express = require('express');
const mongoose = require('mongoose');
const surveyRoutes = require('./routes/survey');
const dotenv = require('dotenv');
dotenv.config();
const cors = require("cors")
const app = express();

app.use(cors())

app.use(express.json());
app.use('/api/survey', surveyRoutes);

const PORT = process.env.PORT || 8000;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // console.log('MongoDB connected');

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error('server connection error:', error);
    process.exit(1);
  }
};


module.exports=connectDB();
