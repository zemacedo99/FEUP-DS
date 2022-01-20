const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ds.meic05@gmail.com',
    pass: process.env.EMAIL_PASSWORD,
  },
});

function sendMail(subjectToSend, textToSend) {
  const mailOptions = {
    from: 'ds.meic05@gmail.com',
    to: process.env.REVIEWS_DESTINATION_EMAIL,
    subject: subjectToSend,
    text: textToSend,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
}

module.exports = sendMail;
