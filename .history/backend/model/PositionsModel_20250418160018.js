const { model } = require("mongoose")

const {PositionsSchema} = require("../schemas/PositionsSchema");

const PosiModel = new model("position", OrdersSchema);

module.exports = {OrdersModel};