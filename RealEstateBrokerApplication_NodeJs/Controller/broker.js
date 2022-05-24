const client = require('../config/connection.js')
const express = require('express');

// const app = express();

// app.listen(3300, () => {
//     console.log("Sever is now listening at port 3300");
// })

// client.connect();

// //This is used to handle conversion to and from json.
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());

exports.getAllBrokers=async(req,res,next)=>{
    client.query(`Select * from broker`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
}

exports.addBroker=async=(req,res,next)=>{
    const broker = req.body;
    let insertQuery = `insert into broker(br_id, br_password, br_username) 
    values('${broker.br_id}', '${broker.br_password}', '${broker.br_username}')`

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Insertion was successful')
        }
        else { console.log(err.message) }
    })
    client.end;
}



// app.post('/addbroker', (req, res) => {
//     const broker = req.body;
//     let insertQuery = `insert into broker(br_id, br_password, br_username) 
//     values('${broker.br_id}', '${broker.br_password}', '${broker.br_username}')`

//     client.query(insertQuery, (err, result) => {
//         if (!err) {
//             res.send('Insertion was successful')
//         }
//         else { console.log(err.message) }
//     })
//     client.end;
// })

exports.brLogin = async (req,res,next ) => {
    const broker = req.body;
    let br
    client.query(`select * from broker where br_username = '${broker.br_username}'`,(err,result) => {
        br = result;
        if(result.rows.length == 0){
            return res.send({"bnp":true})
        }
        let brpass = br.rows[0].br_password;
        if(brpass === broker.br_password){
            return res.send({"auth":true})
        }
        return res.send({"auth":false})
    });
} 