const express = require('express');
const axios = require('axios'); // use for api  
const db = require('../db/db');
const router = express.Router();

// post for everything, get for reading/getting data from db
// user sends survey response to backend and save it to db
// location(key id): 133 (taylor), crowdness (1-5): 1, time: 11:00


//user input
router.post('/user_input', async(req, res) => {
  const {UserId, RespondTime, UserResponse, library_ID} = req.body;

  // check if variable is valid
  if(!UserId || !RespondTime || !UserResponse || !library_ID){
    return res.status(400).json({error: 'User and library ID are required'})
  }

  try{
    const insertUserInput = 'INSERT INTO user (UserId, RespondTime, UserResponse, library_ID) VALUES (?, ?, ?, ?)'
    await db.query (insertUserInput, [UserId, RespondTime, UserResponse, library_ID], (error, result) => {
      if(error){
        return res.status(500).json({error: 'insertion did not work'})
      }

      const selectInput = 'SELECT * FROM user WHERE UserId = ?'
      db.query(selectInput, [UserId], (error, result) => {
        if(error){
          return res.status(500).json({error: 'Insertion error'})
        }
        if(result.length > 0){
          return res.status(200).json(result)
        }
      })
    })
  }
  catch{
    return res.status(400).json({"err": "some error occured"})
  }
})

// get UserInput
router.get('/getUserInput', (req, res) => {
  const userInput = 'SELECT * FROM user';
  db.query(userInput, (error, result) => {
    if(error){
      return res.status(500).json({error: "error in getting user input"})
    }
    if(result.length > 0){
      return res.status(200).json(result)
    }
  })
})

// get user response within the last 15 min
router.get('/getRecentResponses', (req, res) => {
  const recentResponse = 'SELECT * FROM user WHERE RespondTime >= NOW() - INTERVAL 15 MINUTE';
  db.query(recentResponse, (error, result) => {
    if(error){
      return res.status(500).json({error: "Error retriving recent responses"})
    }
    if(result.length > 0){
      return res.status(200).json(result);
    }
  })
})

// get user's Past response
router.get('/alluserResponse', (req, res) => {
  const {UserId} = req.body;
  const response = 'SELECT * FROM user WHERE UserId = ? ORDER BY RespondTime DESC';
  db.query(response, [UserId], (error, result) => {
    if(error){
      return res.status(500).json({error: "Error in retriving responses"});
    }
    if(result.length > 0){
      return res.status(200).json(result);
    }
  })
})

// allow user to update their latest response
router.put('/updateResponse', (req, res) => {
  const { userId, library_ID, newResponse } = req.body;
  const query = `
    UPDATE user 
    SET UserResponse = ?, RespondTime = NOW() 
    WHERE UserId = ? AND library_ID = ? 
    ORDER BY RespondTime DESC LIMIT 1
  `;
  db.query(query, [newResponse, userId, library_ID], (error, result) => {
    if (error) return res.status(500).json({ error: "Failed to update response" });
    if (result.affectedRows > 0) return res.status(200).json(result);
  });
});


// delete user's latest response
router.delete('/deleteResponse', (req, res) => {
  const {UserId} = req.body;
  const response = 'DELETE FROM user WHERE UserId = ? ORDER BY ResponseTime DESC LIMIT 1';
  db.query(response, [UserId], (error, result) => {
    if(error){
      return res.status(500).json({error: "Fail to delete user response"})
    }
    if(result.affectedRows > 0){
      return res.status(200).json(result)
    }
  })
})


/*
router.post('/user_input', async (req, res) => {
  const { location, crowdness, time } = req.body; // req: {head, body (we get info from body)}
  
  // if variable is valid (not null/empty)
  if (!location || !crowdness || !time) {
    return res.status(400).json({ error: 'User and movie ID are required' });
  }
  try {
    // do whatever sql command
    const insertInto = "INSERT INTO library WHERE loc = ?, crowdness = ?, time = ?"
    // db.query (query, [variable for wildcarding], (error, result))
    db.query(insertInto, [location, crowdness, time], (err, result) => {
      if (err) { // catch err first
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

  
