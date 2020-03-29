const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:id', (req, res) => {
    let idNum = Number (req.params.id);
    console.log(idNum);
    
    const queryText = `SELECT * FROM "user_info" WHERE "user_info"."user_id" = $1`
    pool.query(queryText,[idNum])
        .then(results => {
            console.log(results.rows);
            
            res.send(results.rows)
        })
        .catch((error) => res.send(error));
})

router.put('/edit', (req, res) => {
    console.log('logging from post inalumni router', req.body.firstName);
    const userId = req.body.userId
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phoneNumber = Number(req.body.phoneNumber);
    const age = req.body.age;
    const gender = req.body.gender;
    const yearsAtCamp = req.body.yearsAtCamp;
    const favoriteActivity = req.body.favoriteActivity;
    const favoriteMemory = req.body.favoriteMemory;
    const annualFund = req.body.annualFund;
    const volunteerWork = req.body.volunteerWork;
    const newsList = req.body.newsList;
    const willingToBeContacted = req.body.willingToBeContacted;


    const queryText = `UPDATE "user_info" SET "firstName"=$1,"lastName"=$2,"email"=$3,"phoneNumber"=$4,"age"=$5,"gender"=$6,"yearsAtCamp"=$7,"favoriteActivity"=$8,"favoriteMemory"=$9,"annualFund"=$10,"volunteerWork"=$11,"newsList"=$12,"willingToBeContacted"=$13 WHERE ("user_info"."id" = $14)`;
    const values = [firstName, lastName, email, phoneNumber, age, gender, yearsAtCamp, favoriteActivity, favoriteMemory, annualFund, volunteerWork, newsList, willingToBeContacted, userId];
    pool.query(queryText, values)
        .then(() => res.sendStatus(200))
        .catch((error) => res.sendStatus(error));
});


module.exports = router;