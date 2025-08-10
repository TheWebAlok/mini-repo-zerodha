const { model } = require("mongoose")

const {PoSchema} = require("../schemas/OrdersSchema");

const OrdersModel = new model("order", OrdersSchema);

module.exports = {OrdersModel};