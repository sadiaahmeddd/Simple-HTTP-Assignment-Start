const http = require('http');
const html = require('./htmlResponses.js');
const text = require('./textResponses.js');
const json = require('./jsonResponses.js');
const img = require('./imageResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (req, res) => {
  console.log(req.url);

  if (req.url === '/' || req.url === '/index') return html.getIndex(req, res);
  if (req.url === '/page2') return html.getPage2(req, res);
  if (req.url === '/hello') return text.getHello(req, res);
  if (req.url === '/time') return text.getTime(req, res);
  if (req.url === '/helloJSON') return json.getHelloJSON(req, res);
  if (req.url === '/timeJSON') return json.getTimeJSON(req, res);
  if (req.url === '/dankmemes') return img.getSpongegar(req, res);

  return html.getIndex(req, res); // default
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
