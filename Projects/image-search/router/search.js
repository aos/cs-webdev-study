const routes = require('express').Router();
// const history = require('./history');
const request = require('superagent');
require('dotenv').config({path: 'key.env'});

routes.get('/:term', (req, res) => {

  let term = req.params.term;
  let { offset } = req.query;

  // Make a request to bing image search
  request
    .get('https://api.cognitive.microsoft.com/bing/v5.0/images/search')
    .query({q: term})
    .set('Ocp-Apim-Subscription-Key', process.env.API_KEY)
    .then(
      (result) => {
        let JSONresponse = JSON.parse(result.text)

        // Clean up results
        let cleanedResults = []
        // Hardcap offset to 30 to avoid errors
        for (let i = 0; i < (offset <= 30 ? offset : 10); i++) {
          cleanedResults[i] = {
            name: JSONresponse.value[i].name,
            url: JSONresponse.value[i].webSearchUrl,
            thumbnail: JSONresponse.value[i].thumbnailUrl,
            host: JSONresponse.value[i].hostPageDisplayUrl
          }
        }
        res.send(cleanedResults)
        return {term, when: Date.now()}
      },
      // Handle promise rejection
      (failure) => {
        console.log(failure);
      })
      // // Save search history to DB
      // .then(function(res) {
      //   history.save(res);
      // })
})

module.exports = routes;