const express = require("express");
const app = express();
const fs = require("node:fs");

const { PORT } = require("./util/config");

app.get("/", (_req: any, res: any) => {
  try {
    const data = fs.readFileSync("./files/log.txt", "utf8");
    res.send(data);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
});

const start = () => {
  app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
  });
};
start();
