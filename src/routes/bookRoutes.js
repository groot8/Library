/* eslint-disable indent */
const express = require('express');

const bookRouter = express.Router();

function router(nav) {
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
                nav,
                title: 'Library',
                books
            });
        });
    bookRouter.route('/:id')
        .get((req, res) => {
            const { id } = req.params;
            res.render('bookDetails', {
                nav,
                title: 'Library',
                book: books[id]
            });
        });
    return bookRouter;
}

module.exports = router;
