const hello = 'Hello World';
const getTimeString = () => new Date().toString();

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

module.exports = {
  getHello, getTime, getTimeString, hello,
};
