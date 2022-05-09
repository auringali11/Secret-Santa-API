const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
dotenv.config( { path: './.env' } );

var transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
});

function mail(players) {
  for (let i = 0; i < players.length; i++) {
    if (i === players.length - 1) {
      var mailOptions = {
        from: process.env.USER,
        to: players[i].email,
        subject: 'Secret Santa',
        text: `You are the secret santa of ${players[0].name}`
      };
    } else {
      var mailOptions = {
        from: process.env.USER,
        to: players[i].email,
        subject: 'Secret Santa',
        text: `You are the secret santa of ${players[i+1].name}`
      };
    }

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
}

module.exports.mail = mail;