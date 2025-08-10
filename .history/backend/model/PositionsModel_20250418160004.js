const { model } = require("mongoose")

const {PositionsSchema} = require("../schemas/PositionsSchema");

const OrdersModel = new model("po", OrdersSchema);

module.exports = {OrdersModel};