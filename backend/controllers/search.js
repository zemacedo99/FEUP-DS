const { algolia } = require('../database/config');

async function searchPatlet(req, res) {
  algolia.search((req.query.query), {
    hitsPerPage: 100,
  }).then((responses) => {
    res.send(responses.hits.map((hit) => ({ ...hit, id: parseInt(hit.objectID, 10) })));
  });
}

module.exports = {
  searchPatlet,
};
