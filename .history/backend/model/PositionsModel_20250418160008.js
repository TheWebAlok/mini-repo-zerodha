const { model } = require("mongoose")

const {PositionsSchema} = require("../schemas/PositionsSchema");

const OrdersModel = new model("position", OrdersSchema);

module.exports = {OrdersModel};