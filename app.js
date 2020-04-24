const express = require('express');
const chalk = require('chalk');
// eslint-disable-next-line import/no-unresolved
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 4242;
const bookRouter = express.Router();

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
app.set('view engine', 'ejs');
const books = [
  {
    title: 'book1',
    genre: 'art',
    author: 'author1',
    read: false
  },
  {
    title: 'book2',
    genre: 'art',
    author: 'author2',
    read: false
  },
  {
    title: 'book3',
    genre: 'art',
    author: 'author3',
    read: false
  },
  {
    title: 'book4',
    genre: 'art',
    author: 'author4',
    read: false
  }
];

bookRouter.route('/')
  .get((req, res) => {
    res.render('books', {
      nav: [{ link: '/books', title: 'Books' }, { link: '/authors', title: 'Authors' }],
      title: 'Library',
      books
    });
  });
app.use('/books', bookRouter);
app.get('/', (req, res) => {
  res.render(
    'index',
    {
      nav: [{ link: '/books', title: 'Books' }, { link: '/authors', title: 'Authors' }],
      title: 'Library'
    }
  );
});

app.listen(port, () => {
  debug(`listening on port ${chalk.green('4242')}`);
});
