const express = require('express');
// const { rejectUnauthenticated } = require('../modules/authentication-middleware');
// const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
// const userStrategy = require('../strategies/user.strategy');

const router = express.Router();
let queryString = 'SELECT * FROM "user_info" WHERE';

function buildQueryString(array) {
    for (let i = 0; i < array.length; i++) {
        if ([i] == array.length-1) {
            queryString += ` "user_info"."${array[i].category}" iLIKE '%${array[i].search}%';`;
        }
        else {
            queryString += ` "user_info"."${array[i].category}" iLIKE '%${array[i].search}%' AND`;
        } 
    }  
}
router.post('/multiple', (req, res) => {
    console.log('logging array in search post', req.body);
    let array = req.body;
    buildQueryString(array);
   console.log('logging querystring from post', queryString);
    const queryText = queryString;
    pool.query(queryText)
        .then(results => {
            console.log(results.rows);
            res.send(results.rows)
        })
        .catch((error) => res.sendStatus(error));
    queryString = 'SELECT * FROM "user_info" WHERE';
});

router.get('/:category&:search', (req, res) => {
    console.log(req.body);
    let categoryQuery = req.params.category
    let searchQuery = req.params.search
    console.log('param analog', searchQuery);

    const queryText = `SELECT * FROM "user_info" WHERE "user_info"."${categoryQuery}" iLIKE '%${searchQuery}%'`
    pool.query(queryText)
        .then(results => {
            console.log(results.rows);
            res.send(results.rows)
        })
        .catch((error) => res.send(error));
})


router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    let userToDelete = req.params.id
    console.log('param analog', userToDelete);

    const queryText = `DELETE FROM "user_info" WHERE "user_info"."user_id" = $1;`
    pool.query(queryText,[userToDelete])
        .then(results => {
            console.log('deleting complete');
            res.send(status)
        })
        .catch((error) => res.send(error));
})



module.exports = router;