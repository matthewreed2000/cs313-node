function run(req, res) {
  if (req.query) {
    res.render('pages/week09/calculator', {error:false});
  }
  else {
    res.render('pages/week09/calculator', {error: true});
  }
}

module.exports = {run};