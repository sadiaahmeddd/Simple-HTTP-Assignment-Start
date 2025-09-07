/* eslint-disable no-console */
const http = require('http');
const html = require('./htmlResponses.js');
const text = require('./textResponses.js');
const json = require('./jsonResponses.js');
const img = require('./imageResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (req, res) => {
  console.log(req.url);

  switch (req.url) {
    case '/':
    case '/index':
      return html.getIndex(req, res);
    case '/page2':
      return html.getPage2(req, res);

    case '/hello':
      return text.getHello(req, res);
    case '/time':
      return text.getTime(req, res);

    case '/helloJSON':
      return json.getHelloJSON(req, res);
    case '/timeJSON':
      return json.getTimeJSON(req, res);

    case '/dankmemes':
      return img.getSpongegar(req, res);

    // optional: quiet the favicon requests
    case '/favicon.ico':
      res.writeHead(204);
      return res.end();

    default:
      return html.getIndex(req, res); // fallback to index
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
