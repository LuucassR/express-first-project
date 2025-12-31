const db = require("../db.js")

function getMessageById(req, res) {
  const index = req.params.messageId
  const message = db[index]

  if (!message) {
    return res.status(404).send("message not found")
  }

  res.render("message", { message: message })
}

function createMessage(req, res) {
  const text = req.body.text
  const user = req.body.user

  if (!user || !text) {
    return res.status(404).send("message nod found")
  }

  db.push({
    user,
    text,
    added: new Date(),
  })

  res.redirect("/")
}

module.exports = {
  getMessageById,
  createMessage,
} 