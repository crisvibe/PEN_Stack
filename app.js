// -----------------------------------------------------
const express = require('express');
const app = express();
const storeRouter = require('./routes/storeRoutes');
const PORT = 3030;

// ---------
// | Morgan Library
const morgan = require('morgan');
app.use(morgan('dev'));

// -----------------------------------------------------
// | Settings for the template engine:
app.set('view engine', 'ejs');
app.set('views', 'views');

// -----------------------------------------------------
// | Middleware for parsing JSON and handling HTML Forms:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -----------------------------------------------------
// | Routes:
// The index landing page
app.get('/', (req, res) => {
  const message = 'We have a bunch of new flowers today!';
  res.render('index', { message });
});

// The store routes:
app.use('/store', storeRouter);

// The not found page
app.get('*', (req, res) => {
  // #-todo Implement res.render('404', { message });
  res.status(404).send('File not found');
})

// -----------------------------------------------------
// | Run Server:
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});