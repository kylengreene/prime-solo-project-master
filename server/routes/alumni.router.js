const express = require('express');
// const { rejectUnauthenticated } = require('../modules/authentication-middleware');
// const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
// const userStrategy = require('../strategies/user.strategy');

const router = express.Router();



router.post('/', (req, res, next) => {
    console.log('logging from post inalumni router', req.body.firstName);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const age = req.body.age;
    const gender = req.body.gender;
    const yearsAtCamp = req.body.yearsAtCamp;
    const favoriteActivity = req.body.favoriteActivity;
    const favoriteMemory = req.body.favoriteMemory;
    const annualFund = req.body.annualFund;
    const volunteerWork = req.body.volunteerWork;
    const newsList = req.body.newsList;
    const willingToBeContacted = req.body.willingToBeContacted;
    console.log('logging after setting analogs:', lastName);
    
    const queryText = 'INSERT INTO "user_info" ("firstName","lastName","email","phoneNumber","age","gender","yearsAtCamp","favoriteActivity","favoriteMemory","annualFund","volunteerWork","newsList","willingToBeContacted") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)';

    pool.query(queryText, [firstName, lastName, email, phoneNumber, age, gender, yearsAtCamp, favoriteActivity, favoriteMemory, annualFund, volunteerWork, newsList, willingToBeContacted ])
        .then(() => res.sendStatus(201))
        .catch(() => res.sendStatus(500));
});


module.exports = router;