const { model } = require("mongoose")

const {PositionsSchema} = require("../schemas/PositionsSchema");

const PoModel = new model("position", OrdersSchema);

module.exports = {OrdersModel};