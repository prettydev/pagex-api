const passionService = require("../services/passionService/index");

const getAllpassions = (req, res, next) => {
  let limit = req.params.limit;
  let page = req.params.page;

  passionService.getAllPassionService.getAllPassion(res, page, limit);
};

module.exports = {
  getAllpassions
};
