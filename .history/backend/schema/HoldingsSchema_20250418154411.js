const {Schema} = require("mongoose");

const HoldingsSchema = new Schema({
      name: String,
    qty: 2,
    avg: 538.05,
    price: 541.15,
    net: "+0.58%",
    day: "+2.99%",

});
module.exports = {HoldingsSchema}