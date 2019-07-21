const express = require('express');
const path = require('path');

const app = express();
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};
app.use(allowCrossDomain);

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes

app.use('/api/email', require('./routes/mail'));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'personal-website', 'build', 'index.html'));
});

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('personal-website/build'));

//   app.get('#', (req, res) => {
//     res.sendFile(
//       path.resolve(__dirname, 'personal-website', 'build', 'index.html')
//     );
//   });
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
