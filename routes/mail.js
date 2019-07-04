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

// @route    GET api/auth
// @desc     Test  route
// @access   Public
router.post('/', async (req, res) => {
  try {
    let mailOptions = {
      from: 'giladbergmann212@gmail.com', // sender address
      to: 'giladberg@gmail.com', // list of receivers
      subject: 'someone interest me', // Subject line
      html: `<p style="color:blue">name: ${req.body.name}<br>
      email: ${req.body.email}<br>
      phone: ${req.body.phone}<br>
      message: ${req.body.message}
      </p>` // plain text body
    };

    transporter.sendMail(mailOptions, function(err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
    res.send('ok');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
