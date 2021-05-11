var express = require('express');
var router = express.Router();

const candidatesData = require('./db.json')
/* GET posts listing. */
router.get('/', function(req, res, next) {
  //print candidates list
  res.json (candidatesData);
  const candidates = candidatesData.filter(c => c.company === req.query.company )
  res.json(candidates);
  res.send('Candidates!!');
});
//get specific candidate
router.get("/:id", function (req, res, next) {
  const candidate = candidatesData.filter(
    (c) => c.id === parseInt(req.params.id)
  );

  res.json(candidate);
});
// count candidate
router.get('/count', function(req, res, next) {
  const collect = require('collect.js');
  const num = candidatesData.filter(c => c.id === req.query.id );
  console.log ({num});
  const data = collect(num);
  const total = data.count();
  res.send ('Total Candidate: ' + total)

});

module.exports = router;
