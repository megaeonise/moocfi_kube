const { v4: uuidv4 } = require("uuid");

setInterval(() => {
  const date = new Date();
  console.log(`${date.toISOString()}: ${uuidv4()}`);
}, 5000);
