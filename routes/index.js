const { Router } = require("express");
const express = require("express")
const path = require("node:path")
const messages = require("../db")

const indexRoute = Router();
exports.indexRoute = indexRoute;

indexRoute.use(express.static(path.join(__dirname, 'views')));

indexRoute.get("/", (req, res) => {
  res.render("index", { messages: messages })
});

module.exports = indexRoute;
