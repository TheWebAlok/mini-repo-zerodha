const { model } = require("mongoose")

const {PositionsSchema} = require("../schemas/");

const OrdersModel = new model("order", OrdersSchema);

module.exports = {OrdersModel};