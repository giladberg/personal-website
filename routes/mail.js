const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'giladbergmann212@gmail.com',
    pass: 'Xush8833'
  }
});

const mailOptions = {
  from: 'giladbergmann212@gmail.com', // sender address
  to: 'giladberg@gmail.com', // list of receivers
  subject: 'Subject of your email', // Subject line
  html: '<p style="color:blue">berger homo</p>' // plain text body
};

// @route    GET api/auth
// @desc     Test  route
// @access   Public
router.get('/', async (req, res) => {
  try {
    transporter.sendMail(mailOptions, function(err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
    res.send('dsd');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
