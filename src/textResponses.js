// Step 25 (already): dynamic time
const getTimeString = () => new Date().toString();

// Step 26 (already): plain-text endpoints
const hello = 'Hello World';

const getHello = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(hello);
};

const getTime = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(getTimeString());
};

// Step 27: export all (functions + values) in one object
module.exports = {
  getHello,
  getTime,
  getTimeString,
  hello,
};
