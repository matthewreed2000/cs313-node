'use strict'

require('dotenv').config();
const {Pool} = require('pg');

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({connectionString: connectionString});

function run(req, res) {
  console.log(req.path);
  switch(req.path) {
    case '/getPerson':
      runGetPerson(req, res);
      break;
    case '/getParents':
      runGetParents(req, res);
      break;
    case '/getChildren':
      runGetChildren(req, res);
      break;
    default:
      res.sendStatus(404);
  }
}

function returnQueryJSON(res, err, result) {
  if (err) {
    console.log("Error in query: ");
    console.log(err);

    res.status(500).json({success: false, data: err});
  }

  console.log("Back from DB with result:");
  console.log(result.rows);

  res.status(200).json(result.rows);
}

function runGetPerson(req, res) {
  if (typeof req.query !== 'undefined') {
    if (typeof req.query.id !== 'undefined') {
      const sql = "SELECT * FROM w10_person WHERE id = $1";
      const params = [req.query.id];

      pool.query(sql, params, function(err, result) {
        returnQueryJSON(res, err, result);
      });
    }
  }
}

function runGetParents(req, res) {
  if (typeof req.query !== 'undefined') {
    if (typeof req.query.id !== 'undefined') {
      const sql = "SELECT * FROM w10_relation WHERE child_id = $1";
      const params = [req.query.id];

      pool.query(sql, params, function(err, result) {
        returnQueryJSON(res, err, result);
      });
    }
  }
}

function runGetChildren(req, res) {
  if (typeof req.query !== 'undefined') {
    if (typeof req.query.id !== 'undefined') {
      const sql = "SELECT * FROM w10_relation WHERE parent_id = $1";
      const params = [req.query.id];

      pool.query(sql, params, function(err, result) {
        returnQueryJSON(res, err, result);
      });
    }
  }
}

module.exports = {run};