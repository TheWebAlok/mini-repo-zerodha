const { model } = require("mongoose")

const {Schema} = require("../schemas/OrdersSchema");

const OrdersModel = new model("order", OrdersSchema);

module.exports = {OrdersModel};