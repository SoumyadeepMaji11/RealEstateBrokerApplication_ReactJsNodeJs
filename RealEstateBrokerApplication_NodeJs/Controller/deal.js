const client = require('../config/connection.js')
const express = require('express');

exports.getAllDeal = async (req, res, next) => {
    client.query(`Select * from deal`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
}

exports.deleteDeal = async(req,res,next) =>{
    let insertQuery = `delete from deal where id=${req.params.id}`;

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send("Deletion was successful");
        } else {
            console.log(err.message);
        }
    });
    client.end;
}