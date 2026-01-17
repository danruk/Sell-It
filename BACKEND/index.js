const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const config = require("config");

const listings = require("./routes/listings");
const listing = require("./routes/listing");
const categories = require("./routes/categories");
const users = require("./routes/users");
const user = require("./routes/user");
const auth = require("./routes/auth");
const expoPushTokens = require("./routes/expoPushTokens");
const messages = require("./routes/messages");
const my = require("./routes/my");
const delay = require("./middleware/delay");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());
app.use(delay);

// Serve listing images at /assets/*
app.use("/assets", express.static("public/assets"));

app.use("/api/categories", categories);
app.use("/api/listings", listings);
app.use("/api/listing", listing);
app.use("/api/users", users);
app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api/expoPushTokens", expoPushTokens);
app.use("/api/messages", messages);
app.use("/api/my", my);

const port = config.has("port") ? config.get("port") : 9000;
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
