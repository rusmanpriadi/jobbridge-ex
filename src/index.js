const express = require("express");
const { routes } = require("./routes");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// parser body request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, 
};
// cors handler
app.use(cors(corsOptions));
app.use(cookieParser());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

routes(app);

app.listen(port, () => console.log(`Server is running on port ${port}`));
