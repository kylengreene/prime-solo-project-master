const express = require('express');
// const { rejectUnauthenticated } = require('../modules/authentication-middleware');
// const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
// const userStrategy = require('../strategies/user.strategy');

const router = express.Router();



router.post('/', (req, res, next) => {
    console.log('logging from post inalumni router', req.body);
    

    // const queryText = 'INSERT INTO "user_info" (firstName,lastName,email,phoneNumber,age,gender,yearsAtCamp,favoriteActivity,favoriteMemory,annualFund,volunteerWork,newsList,willingToBeContacted) 
    // VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) ';

    // pool.query(queryText, [username, password])
    //     .then(() => res.sendStatus(201))
    //     .catch(() => res.sendStatus(500));
});


module.exports = router;