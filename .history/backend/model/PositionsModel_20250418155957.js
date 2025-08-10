const { model } = require("mongoose")

const {PositionsSchema} = require("../schemas/PositionsSchema");

const OrdersModel = new model("order", OrdersSchema);

module.exports = {OrdersModel};