const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/router/contact.route");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "wellcome to contact book application."});
});
app.use("/api/contacts", contactsRouter);

module.exports = app;