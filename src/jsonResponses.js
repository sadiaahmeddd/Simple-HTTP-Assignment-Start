// Step 28: import textResponses
const text = require('./textResponses.js');

// Step 29: Hello as JSON
const getHelloJSON = (req, res) => {
  const body = { message: text.hello };
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body));
};

// Step 30: Time as JSON
const getTimeJSON = (req, res) => {
  const body = { time: text.getTimeString() };
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body));
};

// Step 31: export both
module.exports = { getHelloJSON, getTimeJSON };
