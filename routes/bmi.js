var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('bmi',{title: 'Express'});
});
router.get('/bmi/:w/:h', function(req, res) {
  
  var k = Number(req.params.w);
  var h = Number(req.params.h);
  var hm = h/100
  var bmi = (k/(hm*2));




  var result = {"bmi":bmi};
  res.send(result);

});

module.exports = router;
