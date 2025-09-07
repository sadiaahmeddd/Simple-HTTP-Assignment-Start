// Step 25: a dynamic function for the current time
const getTimeString = () => new Date().toString();

// Step 26: plain-text endpoints
const hello = 'Hello World';

const getHello = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(hello);
  res.end();
};

const getTime = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(getTimeString());
  res.end();
};

// (export so server.js can use them)
module.exports = { getHello, getTime, getTimeString, hello };
