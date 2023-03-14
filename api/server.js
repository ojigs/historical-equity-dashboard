const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });
const PORT = process.env.PORT;
const connectDB = require("./config/database");
const pyshell = require("./utils/pyshell");
const mainRoutes = require("./routes/main");

connectDB();
pyshell();

// Set up session and save in mongodb when user authentication is set
const sess = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: {},
};

// allow cross origin sharing with port 3000
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", mainRoutes);

app.listen(PORT || 4000, () => {
  console.log(`Server connected on port ${PORT}`);
});
