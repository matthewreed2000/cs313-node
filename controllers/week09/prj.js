function run(req, res) {
  returnObj = {error:true};

  if (req.query.length > 0) {
    returnObj.error = false;
  }

  res.render('pages/week09/calculator', returnObj);
}

module.exports = {run};