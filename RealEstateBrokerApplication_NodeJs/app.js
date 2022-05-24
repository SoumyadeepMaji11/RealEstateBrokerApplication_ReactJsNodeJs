const express = require('express');
const app = express();

const propRouter = require('./Router/propertyRouter')
const custRouter = require('./Router/customerRouter')
const broRouter = require('./Router/brokerRouter')
const dealController = require('./Router/dealRouter')
const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.use(propRouter)
app.use(custRouter)
app.use(broRouter)
app.use(dealController)


app.listen(3300, () => {
    console.log("Sever is now listening at port 3300")
});
