const { model } = require("mongoose")

const {PositionsSchema} = require("../schemas/PositionsSchema");

const OrdersModel = new model("positions", OrdersSchema);

module.exports = {OrdersModel};