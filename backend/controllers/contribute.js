const sendEmail = require('../middleware/email');

async function requestContribute(req, res) {
  const { name, email, reason } = req.body;

  if (
    name === undefined
    || email === undefined
    || reason === undefined
    || name.length === 0
    || email.length === 0
    || reason.length === 0
  ) {
    return res.status(400).json({
      error: 'Missing required fields',
    });
  }

  try {
    const content = `${name} (${email}) wants to contribute to the project: ${reason}`;

    console.log(content);
    sendEmail(`${name} wants to contribute`, content);

    return res.status(201).json({ message: 'Request sent' });
  } catch (err) {
    return res.status(500).json({
      error: 'Something unexpected occurred',
    });
  }
}

module.exports = {
  requestContribute,
};
