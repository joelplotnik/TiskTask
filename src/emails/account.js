const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

const sendCancelationEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: 'joelplotnik@gmail.com',
      subject: 'Good Bye!',
      text: `Good bye, ${name}. I hope to see you back soon.`,
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
  sendCancelationEmail,
};
