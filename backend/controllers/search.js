const algoliasearch = require('algoliasearch');

const client = algoliasearch('RUC322JB2D', '32cb543c74477006f9262979a30edca1');
const index = client.initIndex('patlets');

async function searchPatlet(req, res) {
  console.log(req.query.query);
  index.search({
    query: req.query.query,
  })
    .then((responses) => {
      responses.hits.forEach((hit) => {
        // eslint-disable-next-line no-param-reassign
        hit.id = parseInt(hit.objectID, 10);
      });
      res.send(responses.hits);
    });
}

module.exports = {
  searchPatlet,
};
