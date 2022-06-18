require("dotenv").config();
const express = require("express");
const cors = require("cors");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const morgan = require("morgan");

// Middlewares
const limiter = rateLimit({
  windowMs: 15 * 60 * 100,
  max: 100, 
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(cors());
// app.use(limiter);
app.use(helmet());
// app.use(morgan("dev"));
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, "views")));
app.use("/cart", express.static(path.join(__dirname, "views")));
app.use("/profile", express.static(path.join(__dirname, "views")));
app.use("/create", express.static(path.join(__dirname, "views")));
app.engine(".hbs", exphbs.engine({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", "hbs");

// Routes
app.use("/", require("./routes/index"));

app.listen(process.env.PORT, () =>
  console.log("Listening on port " + process.env.PORT)
);
module.exports = app;
