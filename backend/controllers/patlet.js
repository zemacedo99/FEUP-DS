const firestore = require('../database/config');
const Patlet = require('../models/patlet');

async function getAllPatlets(req, res) {
  try {
    const patlets = await firestore.collection('patlets');
    const snapshot = await patlets.get();
    const patletsArray = [];
    if (snapshot.empty) {
      res.status(404).send('No patlet records found');
    } else {
      snapshot.forEach((doc) => {
        const patlet = new Patlet(
          parseInt(doc.id, 10),
          doc.data().image,
          doc.data().introduction,
          doc.data().linked_patlets,
          doc.data().problem,
          doc.data().solution,
          doc.data().stars,
          doc.data().title,
        );
        patletsArray.push(patlet);
      });
      patletsArray.sort((a, b) => a.id - b.id || a.name.localeCompare(b.name));
      res.send(patletsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = {
  getAllPatlets,
};
