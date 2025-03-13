const express = require('express');
const router = express.Router();
const app = express();
const library = require('./routes/library')
const survey = require('./routes/survey')

// Define a port number
const PORT = 5000;

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.use('/api/lib', library) //names of file in routes
app.use('/api/survey', survey) // "                     "


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});