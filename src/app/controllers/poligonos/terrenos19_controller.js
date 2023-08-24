const { response } = require("express");
const { defaultSucces, defaulMessage } = require("../../helpers/script");


const { land19 } = require("../../models/poligonos/terrenos19_model");
const getLand = async (req, res = response) => {
  const result = await land19();
  return defaultSucces(res, result, "", 200);
};

module.exports = { getLand };
