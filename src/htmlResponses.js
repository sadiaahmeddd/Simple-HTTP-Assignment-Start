const fs = require('fs');
const index = fs.readFileSync(`${__dirname}/../client/client.html`);   // adjust name if yours is index.html
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

const getIndex = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(index);
  res.end();
};

const getPage2 = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(page2);
  res.end();
};

module.exports = { getIndex, getPage2 };
