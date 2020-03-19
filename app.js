// express를 사용한 웹 어플리케이션
var express = require('express');
var app = express();

// 루트
app.get('/', function(req, res){
  res.send('Hello home page');
});

app.get('/unity', function(req, res){
  res.send('Hello Unity, <img src="/unity.png">');
})

// html을 사용할 수 있음
app.get('/login', function(req, res){
  res.send('<h1>Please login</h1>');
})

// port 번호를 이용하여 listen
app.listen(3000, function(){
  console.log('Connected 3000 port');
});
