var express = require('express');
var router = express.Router();
const kijiji = require("kijiji-scraper");

/* GET home page. */
router.post('/', function(request, response, next) {


  //Parse ids object
  let newParams = Object.assign({}, request.body.params)
  let locations = Object.assign({}, request.body.searchIds.location)

  newParams.locationId = (locations.area === "") ? kijiji.locations[locations.province][locations.city] : kijiji.locations[locations.province][locations.area][locations.city]
  newParams.categoryId = kijiji.categories.REAL_ESTATE.FOR_RENT[request.body.searchIds.category]

  // const options = { minResults: 20}

  // const params = {
  //   locationId: kijiji.locations["SASKATCHEWAN"]["SASKATOON"],
  //   categoryId: kijiji.categories.REAL_ESTATE.FOR_RENT["LONG_TERM_RENTALS"],
  // }

  console.log(request.body.options)

  kijiji.search(newParams, request.body.options).then( ads => {
    console.log("Amount of Ads: " + ads.length)
    for (let i = 0; i < ads.length; ++i) {
      console.log(ads[i].title);
  }
  })
  .catch(error => {
    console.log(error)
  })


  response.send('Hello World')
});

module.exports = router;