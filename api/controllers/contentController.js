const contentService = require("../services/contentService/index");

const createNewContent = (req, res, next) => {
  contentService.createNewContentService.createNewContent(req, req.body, res);
};

const createNewContentWithContribution = (req, res, next) => {
  contentService.createNewContentService.createNewContentWithContribution(
    req,
    req.body,
    res
  );
};

const createNewContentWithWork = (req, res, next) => {
  contentService.createNewContentService.createNewContentWithWork(
    req,
    req.body,
    res
  );
};

const getAllContents = (req, res, next) => {
  let limit = req.params.limit;
  let page = req.params.page;

  contentService.getAllContentService.getAllContents(res, page, limit);
};

const getAllContentsWithContribution = (req, res, next) => {
  let limit = req.params.limit;
  let page = req.params.page;
  let userId = req.params.userId;
  contentService.getAllContentService.getAllContentsWithContribution(
    res,
    page,
    limit,
    userId
  );
};

const getAllContentsWithWork = (req, res, next) => {
  let limit = req.params.limit;
  let page = req.params.page;
  let userId = req.params.userId;
  contentService.getAllContentService.getAllContentsWithWork(
    res,
    page,
    limit,
    userId
  );
};

const createNewContentWithReaction = (req, res, next) => {
  contentService.createNewContentService.createNewContentWithReaction(
    req,
    req.body.data,
    res
  );
};

const getAllReactionContentByContentId = (req, res, next) => {
  return contentService.getAllContentService.getAllReactionContentByContentId(
    req,
    req.params.contentId,
    res
  );
};

const getAllReactionContentByUserId = (req, res, next) => {
  return contentService.getAllContentService.getAllReactionContentByUserId(
    req,
    req.params.userId,
    res
  );
};

const createNewContentWithPromotion = (req, res, next) => {
  contentService.createNewContentService.createNewContentWithPromotion(
    req,
    req.body.data,
    res
  );
};

const getAllPromotionContentByUserId = (req, res, next) => {
  return contentService.getAllContentService.getAllPromotionContentByUserId(
    req,
    req.params.userId,
    res
  );
};

module.exports = {
  getAllContents,
  getAllContentsWithContribution,
  getAllContentsWithWork,
  createNewContent,
  createNewContentWithContribution,
  createNewContentWithWork,
  createNewContentWithReaction,
  createNewContentWithPromotion,
  getAllReactionContentByContentId,
  getAllReactionContentByUserId,
  getAllPromotionContentByUserId
};
