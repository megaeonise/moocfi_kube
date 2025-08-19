const { v4: uuidv4 } = require("uuid");
const fs = require("node:fs");

const start_date = new Date();
const random_string = uuidv4();
let log = `${start_date.toISOString()}: ${random_string}`;

setInterval(() => {
  const date = new Date();
  log = `${date.toISOString()}: ${random_string}`;
  try {
    fs.writeFileSync("./files/log.txt", log, { flag: "w+" });
    // file written successfully
  } catch (err) {
    console.error(err);
  }
}, 5000);
