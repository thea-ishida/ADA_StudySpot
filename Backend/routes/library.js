
const express = require('express');
const axios = require('axios'); //used for api
const db = require('../db/db');
const router = express.Router(); 

/*
client --> send a request (new location), post /addNewLib
backend : gets the request, addNewLib, get the parameters, then send the request back to the frontend

// axios.post(`/add new movie`, { [name: "taylor", "address", ....] } ) query[json] 

*/
// Create - post
// get data/ read - Get
// update - Put
// delete - delete

// get all the library data
router.get('/getLib', (req,res) => {
  const name = 'SELECT * FROM library';
  db.query(name, (error,result) => {
    if (error){
      return res.status(500).json({error: "Error in getting library data from database."})
    }
    if (result.length > 0){
      return res.json(result) 
    }
  })
})

// router.get('/add_new_movie', async(req,res)) => {
//     const name - req.name //req is the name from the json
//     const add - req.address;

//     if (!name) { //if name does not exist, prints this in terminal
//         console.error('Error: Missing query parameter'); // console is print in javascript
//         return res.status(400).json({ error: 'Query is required' }); //res - response you send back to client
//     }

//     try{
//         const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
//             params: {
//               api_key: 123,
//               query: "taylor",
//             },
//           });
//           res.json(response.data);
//         } catch (error) { //display error messages
//           console.error('Error fetching movies:', error.message);
//           if (error.response) { // prints what caused the error, we can also send the status back to the api 
//             console.error('API response error:', error.response.data);
//             return res.status(error.response.status).json({ error: error.response.data });
//           }
//           res.status(500).json({ error: 'Internal s
//     }
// }


// deleting something from the data base
// 

module.exports = router;