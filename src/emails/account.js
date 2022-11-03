const sgMail = require('@sendgrid/mail');

const SENDGRID_API_KEY =
  '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';

sgMail.setApiKey(SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: 'joelplotnik@gmail.com',
      subject: 'Weclome to TiskTask!',
      text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    })
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = {
  sendWelcomeEmail,
};
