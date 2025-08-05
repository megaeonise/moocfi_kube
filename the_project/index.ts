const express = require("express");
const app = express();

const { PORT } = require("./util/config");

const start = () => {
  app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
  });
};
start();
