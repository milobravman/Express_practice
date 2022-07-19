
// Current variables 

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();
const data = require('./public/javascripts/data.json');
const port = process.env.PORT || 5000;

app.listen(port,()=> console.log(`listening on port ${port}`))


app.get('/audio', function (req,res) {
  res.sendFile('./public/audio/recording.mp3')
})

app.get('/search', function (req, res) {
  res.json(data);
})

app.get('/data', function(req, res, next) {
  res.render('index', { title: 'data' });
});

app.get('/example/b', (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  //res.send('Hello from B!')
  res.download('./public/images/My_visual.png')

})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('public'));



app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Trying to use the routes from the example




module.exports = app;
