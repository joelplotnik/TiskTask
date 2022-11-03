// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// javascript;

const sgMail = require('@sendgrid/mail');

const SENDGRID_API_KEY =
  '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';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'joelplotnik@gmail.com', // Change to your recipient
  from: 'joelplotnik@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent');
  })
  .catch((error) => {
    console.error(error);
  });
