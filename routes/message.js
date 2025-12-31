const Router = require("express");
const { getMessageById } = require("../controller/newController.js")
const { createMessage } = require("../controller/newController.js");

const messageRouter = Router();
exports.messageRouter = messageRouter;

messageRouter.post("/", createMessage);

messageRouter.get("/:messageId", getMessageById)

module.exports = messageRouter;
