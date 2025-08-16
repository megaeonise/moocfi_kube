const express = require("express");
const app = express();

const { PORT } = require("./util/config");

let o = 0;

app.get("/pingpong", (_req: any, res: any) => {
  o += 1;
  res.send(`pong ${o}`);
});

app.get("/", (_req: any, res: any) => {
  o += 1;
  res.send(`pong ${o} rewrite worked`);
});

const start = () => {
  app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
  });
};

start();
