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
  let tempParams = {}

  tempParams.locationId = (location.area === "") ? locations[location.province][location.city] : kijiji.locations[location.province][location.area][location.city]
  tempParams.categoryId = categories.REAL_ESTATE.FOR_RENT[category]
  tempParams.searchOptionsExactMatch = true
  tempParams.sortType = "DATE_DESCENDING"

  Object.entries(params).map(([key, value]) => {
    if(value !== null) {
        if(key === "areainfeet") {
            tempParams["attr[" + key + "]"] = value[0] + "," +value[1]
        } else if (key === "price") {
            tempParams["minPrice"] = value[0]
            tempParams["maxPrice"] = value[1]
        }
        else {
            tempParams["attr[" + key + "]"] = value
        }
    }
  })

  
  search(tempParams, options)
    .then( ads => {
        console.log("Amount of Ads: " + ads.length)
        response.send(ads)
    })
    .catch(error => {
        console.log(error)
        response.send(error)
    })

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