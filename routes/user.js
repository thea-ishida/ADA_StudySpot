const express = require('express');
const axios = require('axios'); // command for apis
const db = require('../config/db');
const router = express.Router();

/*
client --> send a request (new location), post, /addNewLib
backend -
*/

// register new users
router.post('/register', async (req, res => {
    const {userID} = req.body;

    // if variable is valid (not null/empty)
  if (!userID) {
    return res.status(400).json({ error: 'User ID invalid' })
    }
    try{
        const addUser = "INSERT INTO user WHERE userID = ?"
        //db.query (query, [variable for wildcarding], (error, result))
        db.query (addUser, [userID], (err, result) => {
            // catch error first

            if(err){
                return res.status(500).json({"message": "insertion did not work"})
            }
        })

    }catch{

    }
}))