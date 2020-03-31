const mongoose = require("mongoose");
const ContentType = require("../contants/ContentType");

const createNewContent = (data, photo) => {
  return new Promise((resolve, reject) => {
    resolve({
      _id: new mongoose.Types.ObjectId(),
      user: data.contentUserId,
      contentTitle: data.contentTitle,
      contentDescription: data.contentDescription,
      contentImage: photo,
      contentType: data.contentType
    });
  });
};

const createNewContentWithContribution = (data, photo) => {
  return new Promise((resolve, reject) => {
    resolve({
      _id: new mongoose.Types.ObjectId(),
      user: data.contentUserId,
      contentDescription: data.contentDescription,
      contentTag: data.contentTag,
      contentImage: photo,
      contentType: "Contribution"
    });
  });
};

const createNewContentWithWork = (data, photo) => {
  return new Promise((resolve, reject) => {
    resolve({
      _id: new mongoose.Types.ObjectId(),
      user: data.contentUserId,
      contentTitle: data.contentTitle,
      contentDescription: data.contentDescription,
      contentImage: photo,
      contentArtist: data.contentArtist,
      contentType: "Work"
    });
  });
};

const createNewContentWithReaction = (data, photo) => {
  return new Promise((resolve, reject) => {
    resolve({
      _id: new mongoose.Types.ObjectId(),
      user: data.userId,
      parentContent: data.contentId,
      contentDescription: data.contentDescription,
      contentTag: data.contentTag,
      contentImage: photo,
      contentType: ContentType.Reaction,
      typeOfReaction: data.typeOfReaction
    });
  });
};

const createNewContentWithPromotion = data => {
  return new Promise((resolve, reject) => {
    resolve({
      _id: new mongoose.Types.ObjectId(),
      user: data.userId,
      parentContent: data.contentId,
      contentDescription: data.contentDescription,
      contentType: ContentType.Promotion
    });
  });
};

module.exports = {
  createNewContent,
  createNewContentWithContribution,
  createNewContentWithWork,
  createNewContentWithReaction,
  createNewContentWithPromotion
};
