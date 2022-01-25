const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_EMAIL_PASSWORD,
  },
});

function sendMail(subjectToSend, textToSend) {
  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: process.env.REVIEWS_DESTINATION_EMAIL,
    subject: subjectToSend,
    text: textToSend,
  };

  transporter.sendMail(mailOptions, () => {});
}

module.exports = sendMail;
