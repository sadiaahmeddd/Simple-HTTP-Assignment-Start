const text = require('./textResponses.js');

const getHelloJSON = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: text.hello }));
};

const getTimeJSON = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ time: text.getTimeString() }));
};

module.exports = { getHelloJSON, getTimeJSON };
