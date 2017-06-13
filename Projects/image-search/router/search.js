const routes = require('express').Router();
const request = require('superagent');
require('dotenv').config({path: 'key.env'});

routes.get('/:term', (req, res) => {

  // Search term and offset
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
        return {term, when: getDate()}
      },
      // Handle promise rejection
      (err) => {
        console.log(err);
      })
      // Save search history to DB
      .then((result) => {
        req.session.collection('history').insertOne({term: result.term, when: result.when})
        .then(
          (res) => console.log('Inserted history into DB'), 
          (err) => console.log(err));
      })
})

function getDate() {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Parse out date, month, year
  let dt = new Date(Date.now())
  let month = dt.getUTCMonth();
  let year = dt.getUTCFullYear();
  let date = dt.getUTCDate();
  let time = dt.toLocaleTimeString();

  // Build string date
  let natural = `${months[month]} ${date} ${year}, ${time}`;
  return natural;
}

module.exports = routes;