const indexRoute = require("./routes/index.js");
const messageRouter = require("./routes/message.js");
const newMessageRouter = require("./routes/newMessage.js");
const path = require("node:path")
const express = require("express")

const app = express()
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs")

app.use("/{index}", indexRoute)
app.use("/message{s}", messageRouter)
app.use("/new-message{s}", newMessageRouter)
app.use((req, res) => {
  res.status(404).render('404')
})

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
