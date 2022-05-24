const client = require("../config/connection.js");
const express = require("express");

const app = express();
client.connect();

exports.getAll = async (req, res, next) => {
    client.query(`Select * from property`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
}

exports.getByCity = async (req, res, next) => {
    client.query(`Select * from property where city='${req.params.city}'`,(err, result) => {
            if (!err) {
                res.send(result.rows);
            }
        }
    );
    client.end;
}

exports.getByType = async (req, res, next) => {
    client.query(`Select * from property where prop_type='${req.params.prop_type}'`,(err, result) => {
            if (!err) {
                res.send(result.rows);
            }
        }
    );
    client.end;
}

exports.addProperty = async (req, res, next) => {
    const property = req.body;
    let insertQuery = `insert into property(city, offer_type, price, prop_id, prop_type) 
    values('${property.city}', '${property.offer_type}', '${property.price}','${property.prop_id}', '${property.prop_type}')`;

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send("Insertion was successful");
        } else {
            console.log(err.message);
        }
    });
    client.end;
}

exports.updateProperty = async (req, res, next) => {
    let property = req.body;
    let updateQuery = `update property
                       set city = '${property.city}',
                       offer_type = '${property.offer_type}',
                       price = '${property.price}',
                       prop_id = '${property.prop_id}',
                       prop_type = '${property.prop_type}'
                       where id = ${property.id}`

    client.query(updateQuery, (err, result) => {
        if (!err) {
            res.send('Update was successful')
        }
        else { console.log(err.message) }
    })
    client.end;
}

// app.put('/updateproperty/:id', (req, res) => {
//     let property = req.body;
//     let updateQuery = `update property
//                        set city = '${property.city}',
//                        offer_type = '${property.offer_type}',
//                        price = '${property.price}',
//                        prop_id = '${property.prop_id}',
//                        prop_type = '${property.prop_type}'
//                        where id = ${property.id}`

//     client.query(updateQuery, (err, result) => {
//         if (!err) {
//             res.send('Update was successful')
//         }
//         else { console.log(err.message) }
//     })
//     client.end;
// })

exports.deleteProperty = async (req, res, next) => {
    let insertQuery = `delete from property where id=${req.params.id}`;

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send("Deletion was successful");
        } else {
            console.log(err.message);
        }
    });
    client.end;
}

