const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8010 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    // console.log('received: %s', message);
    ws.send(message);
  });

  // ws.send('something from server');
});
