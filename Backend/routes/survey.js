const express = require('express');
const axios = require('axios'); //used for api
const db = require('../db/db');
const router = express.Router(); 


// // post for everything, get for reading/getting data from db 
// // user sends surveyr response to backend and we save it in db
// // req uses json format 
// // libary location, crowdedness(1-5), time  [in json format]
// // location (key id_ :133 (taylor lib), crowdedness (1 5 ): 1, time : 11:00)
// router.get('/user_input'), (req, res-> {
//     const = {location, crowdness, time} - req.body; // req: {head, body (gets info from body)}

// })

// // async when we use await 

// router.post('/user_input'), async(req, res-> {
//     const = {location, crowdness, time} - req.body; // req: {head, body (gets info from body)}
//     //make sure the data is not empty


//     //if variable is valid (not null/empty)
//     if (!location || !crowdness || !time)});
//         return res.status(400).json({error: 'USer and movie id are require'}));
//     try{
//         // do whatever sql command 
//         const query  = "INSERT INTO library WHERE loc= ?, crowdedness = ?, time = ?"
//         // db.query (query, [variable for wildcarding], (error, result))
//         db.query(insertInto, [location, crowdedness, time], (err, result) -> (
//             if (err){
//                 return res.status(500).json({"message": "insertion did not work"})
//             }

//             // check if insert worked 
//             const sel="SELECT * FROM library WHERE loc = ?, corwdedness =?, time =?"
//             db.select(sel,[location, crowdedness, time] (err, reuntForSel) => {
//                 // check error first 
//                 if (err){
//                     return res.status(500).json({"message": "insertion did not work"})
//                 }
//                 // good to send back a success full response (200-299)
//                 if (resultForSel.length>0){  // selection works, it was added to the table
//                     return res.stats(200-299).json({resultForSel}) //result for sel is returned 
//                     return res.status(201).json({"message": "insertion did work!"})

//                 }
//             }
//         ))
//     }
//     //catch any errors if they occured
//     catch{
//         return res.status(400).json({"err": "some error occurred"})
//     }
// })

module.exports = router;