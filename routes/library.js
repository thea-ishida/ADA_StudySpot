const express = require('express');
const router = express.Router();
const axios = require('axios'); // command for apis
const db = require('../db/db');

/*
- first identify what http protocol
- create const query 
- db.query (const query, placeholders if necessary, (err, result) -
- if its post, put, delete => additional query to check if it the query worked
- return res.status(code).json(result)
*/

/*
client --> send a request (new location), post, /addNewLib
backend -
*/

// axios.post(`/add new movie`, { "name": "taylor", "address",".." } )
/*
axios.post('url', {data in json format}). then (response => logic for response). catch (error => catch any errors)
*/

// create - post
// get data/  read - get
// update - put
// delete

// get all the library data
// endpoint: what the front end is going to call
// in the get command: router.get('/endpointName', (req, res) => { logic here });
// fetch (localhost/5000/api/lib/getLib)
// wait for res and store it somewhere
// async: make function asynchronous, should always have a wait keyword
router.get('/getLib', (req, res) => { // req and res is like a small lambda function
  const name = 'SELECT * FROM library';
  // db.query (ur actual query, (err, result) => { logic });
  db.query(name, (error, result) => {
    if (error){ // catch error
      return res.status(500).json({error: " Error in geting library data from database"}); // express will need to convert into json file {error: "", body: "" }
    }
    if (result.length > 0){
      // unless db is empty, it shouldn't be 0
      return res.status(200).json(result)
    }
  })
  

})

router.post('/addLib', (req, res) => {
  const {libName, libID} = req.body // in the req.body: header, body contains the data;   jsonwhatever.attribute -> returns the value
  const newLib = 'INSERT INTO library (libraryID, libraryName) VALUES (?, ?)'
  db.query(newLib, [libID, libName], (error, result) => {
    if(error){
      return res.status(500).json({error: "Error in adding new library"})
    }
    const checkLib = 'SELECT * FROM library WHERE libraryID = ?'
    db.query(checkLib, [libID], (error, result) => {
      if(error){
        return res.status(500).json({error: "Error library did not insert properly"})
      }
      if(result.length > 0){
        return res.status(200).json(result)
      }
    })
  })
})


/*
router.get('/add_new_movie', async(req, res)=>{
    const name = req.name;
    const add = req.address;

    if (!name) {
        console.error('Error: Missing query parameter');
        return res.status(400).json({ error: 'Query is required' });
      }

    try{
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
              api_key: 123,
              query: "taylor",
            },
          });
          res.json(response.data);
        } catch (error) {
          console.error('Error fetching movies:', error.message);
          if (error.response) {
            console.error('API response error:', error.response.data);
            return res.status(error.response.status).json({ error: error.response.data });
          }
          res.status(500).json({ error: 'Internal server error'})}
        })



// delete library
router.post('/user_input', async (req, res => {
  const { location, crowdness, time } = req.body;

  // if variable is valid (not null/empty)
  if (!location || !crowdness || !time) {
  return res.status(400).json({ error: 'User and movie ID are required' })
  }
  try {
    const deleteQuery = "DELETE FROM library WHERE loc = ?, crowdness = ?, time = ?"
    db.query(deleteQuery,[location, crowdness, time], (err, result)=> {
      if (err) {
        return res.status(500).json({ message: "Deletion did not work"})
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Library not found" })
      }
      return res.status(200).json({ message: "Library deleted successfully!" });
    });
  } catch (err) {
    return res.status(500).json({ error: "Some error occurred" })
  }
}))

// edit library
router.post('/user_input', async (req, res => {
  const { location, crowdness, time } = req.body;
  
  // if variable is valid (not null/empty)
  if (!location || !crowdness || !time) {
    return res.status(400).json({ error: 'User and movie ID are required' });
  }
  try {
    // do whatever sql command
    const updateQuery = "UPDATE library SET loc = ?, crowdness = ?, time = ? WHERE loc = ?, crowdness = ?, time = ? "
    // db.query (query, [variable for wildcarding], (error, result))
    db.query(insertInto, [location, crowdness, time], (err, result) => {
      // catch err first
      if (err) {
        return res.status(500).json({"message": "insertion did not work"})
      }
      // check if insert worked
      const sel = "SELECT * FROM library WHERE loc = ?, crowdness = ?, time = ?"
      db.query(sel, [location, crowndess, time], (err, resultForSel) => {
        // check error first
        if (err) {
          return res.status(500).json({"message": "insertion did not work"})
        }
        // good so send back a successful response (200-299)
        if (resultForSel.length > 0) {
          return res.status(201).json({"message": "insertation did work!"})
        }
      })
    })
  // catch any errs if it occured
  } catch {
    return res.status(400).json({"err": "some error occured"})
  }

}))
*/

module.exports = router;