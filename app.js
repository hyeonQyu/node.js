// express를 사용한 웹 어플리케이션
var express = require('express');
var app = express();

// 정적인 파일을 public 디렉토리에 넣고 다음 코드를 추가
app.use(express.static('public'));

// 루트
app.get('/', function(req, res){
  res.send('Hello home page');
});

// html을 사용할 수 있음
app.get('/login', function(req, res){
  res.send('<h1>Please login</h1>');
});

app.get('/unity', function(req, res){
  res.send('Hello Unity, <img src="/unity.png">');
});

// port 번호를 이용하여 listen
app.listen(3000, function(){
  console.log('Connected 3000 port');
});
