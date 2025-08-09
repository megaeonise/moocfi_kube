const express = require("express");
const app = express();

const { PORT } = require("./util/config");

app.get("/", (_req: any, res: any) => {
  res.json({ test: "test" });
});

const start = () => {
  app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
  });
};
start();
