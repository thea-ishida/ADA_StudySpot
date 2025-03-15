require('dotenv').config();
const express = require('express');
const router = express.Router();
const app = express();
const library = require('./routes/library');
const survey = require('./routes/survey');




// Define a port number
const PORT = 5000// process.env.PORT || 3000; 

// Define a simple route
app.get('/', (req, res) => { // req sent from front to back end, result is the opposite
    res.send('Hello, Express!'); // result is sent to the front
});

app.use('/api/lib', library) // names of file in routes
app.use('/api/survey', survey) // same as above
// frontend -> westernspot.com/api/lib/getData to backend

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});