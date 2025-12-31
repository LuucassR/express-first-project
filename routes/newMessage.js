const Router = require("express")
const express = require("express");
const path = require("node:path");


const newMessageRouter = Router()

newMessageRouter.use(express.static(path.join(__dirname, 'views')));

newMessageRouter.get("/", (req, res) => {
  res.render("newMessage")
})

module.exports = newMessageRouter;
