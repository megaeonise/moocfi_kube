const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");

const { PORT } = require("./util/config");
const start_date = new Date();
let log = `${start_date.toISOString()}: ${uuidv4()}`;

setInterval(() => {
  const date = new Date();
  log = `${date.toISOString()}: ${uuidv4()}`;
}, 5000);

app.get("/", (_req: any, res: any) => {
  res.send(log);
});

const start = () => {
  app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
  });
};
start();
