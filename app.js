// -----------------------------------------------------
const express = require('express');
const app = express();
const storeRouter = require('./routes/storeRoutes');
const PORT = 3030;

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
  res.send('Welcome')
});

// The store routes:
app.use('/store', storeRouter);

// -----------------------------------------------------
// | Run Server:
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});