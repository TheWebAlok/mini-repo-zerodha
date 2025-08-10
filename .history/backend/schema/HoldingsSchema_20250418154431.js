const {Schema} = require("mongoose");

const HoldingsSchema = new Schema({
      name: String,
    qty: 2,
    avg: 538.05,
    price: 541.15,
    net: "+0.58%",
    day: String,

});
module.exports = {HoldingsSchema}