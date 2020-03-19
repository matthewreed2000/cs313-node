const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

var app = express();

// Setup server
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Root-Level Pages
app.get('/', (req, res) => res.render('pages/index'));

// Week 09
app.get('/week09/team/math', (req, res) => {
  let week09obj = require('./controllers/week09');
  num1 = req.query.num1;
  num2 = req.query.num2;
  symbol = week09obj.getOperationSymbol(req.query.operation);
  result = week09obj.computeFromQueries(req.query);
  res.render('pages/week09/team/math', {
    num1: num1,
    num2: num2,
    symbol: symbol,
    result: result
  });
});

app.get('/week09/team/math_service', (req, res) => {
  let week09obj = require('./controllers/week09/team');
  num1 = req.query.num1;
  num2 = req.query.num2;
  symbol = week09obj.getOperationSymbol(req.query.operation);
  result = week09obj.computeFromQueries(req.query);
  res.json({
    num1: num1,
    num2: num2,
    symbol: symbol,
    result: result
  });
});

app.get('/week09', (req, res) => { res.redirect('/week09/prj'); });

app.get('/week09/prj/calculator', (req, res) => {
  let week09obj = require('./controllers/week09/prj');
  week09obj.run(req, res);
});


// Week 10
app.use('/week10/team', express.static('./controllers/week10/team/public'));
app.get('/week10/team*', (req, res) => {
  let newReq = req;
  newReq.url = newReq.url.replace('/week10/team', '');

  let week10obj = require('./controllers/week10/team');
  week10obj.run(newReq, res);
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));