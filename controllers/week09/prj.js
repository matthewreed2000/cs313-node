function run(req, res) {
  if (req.query):
    res.render('pages/week09/calculator');
  else:
    res.render('pages/week09/calculator', {error: true});
}

module.exports = {run};