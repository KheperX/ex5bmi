var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req,res,next){
  res.render('index', {title: 'Express'});
});
router.get('/conv/:tem/:unit', function(req, res) {
  
   var tem = Number(req.params.tem);
   var unit = req.params.unit;
   var tem_conv;
   var unit_conv;
   if(unit.trim()=='cel'){
    tem_conv = ((tem/5)*9)+32;
    unit_conv = "Fahrenheit";
   }else{
    tem_conv = ((tem-32)/9)*5;
    unit_conv = "Celsius";
  }
  var result = {"tem_conv":tem_conv,"unit_conv":unit_conv};
  res.send(result);
  
});

module.exports = router;
