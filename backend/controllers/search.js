const functions = require('firebase-functions');
const { Client } = require('@elastic/elasticsearch');

// Initialize Elastic, requires installing Elastic dependencies:
// https://github.com/elastic/elasticsearch-js
//
// ID, username, and password are stored in functions config variables
const ELASTIC_ID = functions.config().elastic.id;
const ELASTIC_USERNAME = functions.config().elastic.username;
const ELASTIC_PASSWORD = functions.config().elastic.password;

const client = new Client({
  cloud: {
    id: ELASTIC_ID,
    username: ELASTIC_USERNAME,
    password: ELASTIC_PASSWORD,
  },
});

const onPatletCreated = functions.firestore.document('patlets/{patletId}').onCreate(async (snap, context) => {
  const patlet = snap.data();

  const id = context.params.patletId;

  client.index({
    index: 'patlet',
    id,
    body: patlet,
  });
});

const searchPatlets = functions.https.onCall(async (data) => {
  const { query } = data;

  const searchRes = await client.search({
    index: 'patlet',
    body: {
      query: {
        query_string: {
          query: `*${query}*`,
          fields: [
            'title',
            'problem',
          ],
        },
      },
    },
  });

  const { hits } = searchRes.body.hits;

  const patlets = hits.map((h) => h._source);
  return {
    patlets,
  };
});

module.exports = {
  onPatletCreated,
  searchPatlets,
};
