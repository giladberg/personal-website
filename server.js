const express = require('express');

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes

app.use('/api/email', require('./routes/mail'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
