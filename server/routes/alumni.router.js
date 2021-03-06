const express = require('express');
// const { rejectUnauthenticated } = require('../modules/authentication-middleware');
// const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
// const userStrategy = require('../strategies/user.strategy');

const router = express.Router();



router.post('/', (req, res) => {
    console.log('logging from post inalumni router', req.body.firstName);
    const userId = req.body.userId
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phoneNumber = Number (req.body.phoneNumber);
    const age = req.body.age;
    const gender = req.body.gender;
    const yearsAtCamp = req.body.yearsAtCamp;
    const favoriteActivity = req.body.favoriteActivity;
    const favoriteMemory = req.body.favoriteMemory;
    const annualFund = req.body.annualFund;
    const volunteerWork = req.body.volunteerWork;
    const newsList = req.body.newsList;
    const willingToBeContacted = req.body.willingToBeContacted;

    
    const queryText = `INSERT INTO "user_info" ("user_id","firstName","lastName","email","phoneNumber","age","gender","yearsAtCamp","favoriteActivity","favoriteMemory","annualFund","volunteerWork","newsList","willingToBeContacted") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)`;
    const values = [userId, firstName, lastName, email, phoneNumber, age, gender, yearsAtCamp, favoriteActivity, favoriteMemory, annualFund, volunteerWork, newsList, willingToBeContacted];
    pool.query(queryText,values )
        .then(() => res.sendStatus(201))
        .catch((error) => res.sendStatus(error));
});

router.put('/', (req, res) => {
    console.log('logging from put inalumni router', req.body.url);
    const picUrl=req.body.url
    const alumniId=req.body.id
    const queryText = `UPDATE "user_info" SET "url"=$1 WHERE "user_id" = $2`;
    pool.query(queryText, [picUrl, alumniId])
        .then(() => res.sendStatus(200))
        .catch((error) => res.sendStatus(error));
});
router.get ('/', (req,res) =>{
    const queryText = `SELECT * FROM "user_info"`
    pool.query(queryText)
        .then(results => {

            res.send(results.rows)})
        .catch((error) => res.send(error));
})




module.exports = router;