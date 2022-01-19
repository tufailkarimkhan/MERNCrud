const express = require("express");
const connectDB = require("./database/database");
const route = require("./router/router");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(express.json());
/*here set cors */
app.use(cors());
/*here i set rote path to redirect to route*/

app.use("/", route);

app.listen(port, () => {
  console.log(`Port listening at ${port}`);
  connectDB();
});
