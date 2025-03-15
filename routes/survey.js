const express = require('express');
const axios = require('axios'); // use for api  
const db = require('../db/db');
const router = express.Router();

// post for everything, get for reading/getting data from db

// user sends survey response to backend and save it to db
// location(key id): 133 (taylor), crowdness (1-5): 1, time: 11:00


/*
router.post('/user_input', async (req, res => {
  const { location, crowdness, time } = req.body;
  
  // if variable is valid (not null/empty)
  if (!location || !crowdness || !time) {
    return res.status(400).json({ error: 'User and movie ID are required' });
  }
  try {
    // do whatever sql command
    const insertInto = "INSERT INTO library WHERE loc = ?, crowdness = ?, time = ?"
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

  
