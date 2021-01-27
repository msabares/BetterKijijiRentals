var express = require('express');
var router = express.Router();
var ListingsController = require('../controller/ListingsController')

router.post(
  '/', 
  ListingsController.validate("getListings"),
  ListingsController.getListings
  );

module.exports = router;