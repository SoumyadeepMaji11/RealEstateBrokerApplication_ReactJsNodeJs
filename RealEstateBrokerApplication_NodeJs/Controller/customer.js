const client = require('../config/connection.js')
const express = require('express');

cid=0;

exports.getAll = async (req, res, next) => {
    client.query(`Select * from customer`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
}

exports.addCustomer = async (req, res, next) => {
    const customer = req.body;

    client.query(`select * from customer where cust_name ='${customer.cust_name}'`, (err, result) => {
        user = result;
        if (result.rows.length !== 0) {
            return res.send({ "up": true })
        }
        else {
            let insertQuery = `insert into customer(cust_age, cust_gender, cust_id, cust_name, cust_password) 
    values('${customer.cust_age}', '${customer.cust_gender}', '${customer.cust_id}','${customer.cust_name}', '${customer.cust_password}')`

            client.query(insertQuery, (err, result) => {
                if (!err) {
                    res.send('Insertion was successful')
                }
                else { console.log(err.message) }
            })
            client.end;
        }
    })
}

exports.customerLogin = async (req, res, next) => {
    const customer = req.body;
    let user
    client.query(`select * from customer where cust_name ='${customer.cust_name}'`, (err, result) => {
        user = result;
        //cid = result.rows[0].cust_id
        //console.log(cid);

        if (result.rows.length == 0) {
            return res.send({"unp": true })
        }
        //cid = result.rows[0].cust_id
        let pass = user.rows[0].cust_password;
        if (pass === customer.cust_password) {
            cid = result.rows[0].cust_id
            console.log(cid);
            return res.send({"auth": true })  
        }
        return res.send({ "auth": false })   
    });  
    //cid = user.rows[0].id
   //console.log(cid)
}

exports.deal = async(req,res,next) =>{
    console.log(cid)
    let i = req.params.id;
    console.log(i);
    client.query(`select * from property where id ='${i}'`,(err,result) => {
    console.log(result.rows[0]);

    client.query( `insert into deal( cust_id,city,price,prop_id,prop_type) 
    values('${cid}', '${result.rows[0].city}', '${result.rows[0].price}','${result.rows[0].prop_id}', '${result.rows[0].prop_type}')`);

    });
    
}