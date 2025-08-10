const { model } = require("mongoose")

const {PositionsSchema} = require("../schemas/OrdersSchema");

const OrdersModel = new model("order", OrdersSchema);

module.exports = {OrdersModel};