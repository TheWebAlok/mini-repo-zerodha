const { model } = require("mongoose")

const {PositionsSchema} = require("../schemas/PositionsSchema");

const PositionsModel = new model("position", PoSchema);

module.exports = {OrdersModel};