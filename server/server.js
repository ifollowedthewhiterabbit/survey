require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const surveyResultsRouter = require('./routes/survey-results');

const server = express();

server.use(bodyParser.json());

server.use(cors({
  origin: process.env.CORS_ORIGINS,
}));

server.use('/api', [
  surveyResultsRouter
]);

server.use(express.static(path.join(__dirname, 'static')));

server.listen(4000, () => {
  console.log(`Server listening on port: 4000`);
});