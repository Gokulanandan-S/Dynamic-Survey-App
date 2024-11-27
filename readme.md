# Survey Application with AI-Generated Questions

This is a dynamic survey system that uses AI to generate the next question based on the user's responses. The project is built with **Node.js, Express, MongoDB**, and **React.js** on the frontend.

## Features

- AI-driven dynamic questioning using Google's Gemini API.
- MongoDB integration for storing survey questions and responses.
- Frontend built using React.js for a responsive and interactive survey experience.

## Project Structure

- **Backend**: The backend is built with Node.js, Express, and MongoDB. It includes routes for starting a survey and generating the next question dynamically based on user input.
- **Frontend**: The frontend is built with React.js and interacts with the backend API for displaying survey questions and handling responses.

## Getting Started

### Prerequisites

Before running the project, make sure you have:

- Node.js installed
- MongoDB installed and running
- A valid API key for Google's Gemini AI (or any other AI service you are integrating).

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/survey-app.git
    cd survey-app
    ```

2. Install dependencies for the backend:

    ```bash
    cd backend
    npm install
    ```

3. Install dependencies for the frontend:

    ```bash
    cd frontend
    npm install
    ```

4. Create a `.env` file in the backend root directory with the following content:

    ```
    MONGO_URI=your_mongodb_connection_string
    AI_API_KEY=your_google_gemini_api_key
    PORT=8000
    ```

### Running the Project

#### Backend

To start the backend server, run:

```bash
cd backend
npm start
