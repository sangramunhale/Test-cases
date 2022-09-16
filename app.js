const express = require("express");

const port = 8080;

const app = express();

app.use("/user", require("./routes/users"));

module.exports = app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
