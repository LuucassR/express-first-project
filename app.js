const indexRoute = require("./routes/index.js");
const messageRouter = require("./routes/message.js");
const newMessageRouter = require("./routes/newMessage.js");
const express = require("express")

const app = express()
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs")

app.use("/{index}", indexRoute)
app.use("/message{s}", messageRouter)
app.use("/new-message{s}", newMessageRouter)

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
