
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'node_modules/socket.io/node_modules/socket.io-client')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

// add socket.io
// 乾要把 Error Handler 做好, 不然會讓整個 Server 掛掉
var io = require('socket.io')(server);
io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world from server' });
  socket.on('my other event', function (data) {
    try{
      console.log(data);
      throw Error('user raise it!');
    }
    catch(e){
      console.log(e);
    }

    if(Math.random() >= 0.5){
      throw Error('test2');
    }

  });
});

// Test Socket IO
// ws.emit('my other event', 3123);
