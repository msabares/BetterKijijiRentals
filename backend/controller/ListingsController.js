const {locations, categories, search} = require("kijiji-scraper");
const {body, validationResult} = require("express-validator")

exports.getListings = async (request, response) => {

    //Validate request
    const errors = validationResult(request);
    if(!errors.isEmpty()) {
        response.status(400).json({errors: errors.array()})
        return
    }

  //Deconstruct body
  let { searchIds: {location, category}, options, params } = request.body

  //Setup locationId and categoryId based on searchIds
  params.locationId = (location.area === "") ? locations[location.province][location.city] : kijiji.locations[location.province][location.area][location.city]
  params.categoryId = categories.REAL_ESTATE.FOR_RENT[category]

  console.log()
  console.log(request.body)
  search(params, options)
    .then( ads => {
        console.log("Amount of Ads: " + ads.length)
        console.log()
        for (let i = 0; i < ads.length; ++i) {
            console.log(ads[i].title);
        }
    })
    .catch(error => {
        console.log(error)
    })

  response.send('Hello World')
}

exports.validate = (method) => {
    switch(method) {
        //TODO: custom validation if Area is empty or not
        //TODO: custom validation if Location and Area exists
        case "getListings": {
            return [
                body('searchIds', 'Location and Category is required').exists(),
                body('options', 'Options is required').exists(),
                body('params', 'Params is required').exists()
            ]
        }
    }
}