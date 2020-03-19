// express를 사용한 웹 어플리케이션
var express = require('express');
var app = express();
app.locals.pretty = true;

// jade 템플릿 엔진 연결
app.set('view engine', 'jade');
// jade 파일은 views 디렉토리에 존재
app.set('views', './views');

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

app.get('/dynamic', function(req, res){
  var lis = '';
  for(var i = 0; i < 5; i++){
    lis = lis + '<li>coding</li>';
  }

  // 시간 출력(정적인 파일로는 시간을 출력할 수 없음)
  var time = Date();

  // 동적 페이지에 html을 사용
  var output = `
  <<!DOCTYPE html>
  <html lang="en" dir="ltr">
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      Hello, dynamic
      <ul>
        ${lis}
      </ul>
      ${time}
    </body>
  </html>`

  res.send(output);
});

// views 디렉토리 안의 jade파일을 렌더링함
app.get('/template', function(req, res){
  // jade파일(템플릿)에 값 전달을 위해 render함수 안에 인자를 추가
  res.render('temp', {title:'Jade', time:Date()});
});

// port 번호를 이용하여 listen
app.listen(3000, function(){
  console.log('Connected 3000 port');
});
