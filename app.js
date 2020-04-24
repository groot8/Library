const express = require('express');
const chalk = require('chalk');
// eslint-disable-next-line import/no-unresolved
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 4242;

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, '/public/')));
app.use(
  '/css',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')),
);
app.use(
  '/js',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')),
);
app.use(
  '/js',
  express.static(path.join(__dirname, '/node_modules/jquery/dist')),
);
app.set('views', './src/views');
app.set('view engine', 'pug');
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  debug(`listening on port ${chalk.green('4242')}`);
});
