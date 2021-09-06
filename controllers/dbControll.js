const {getAllBooks, updateItemBook, delBook, addBook,addAuthor} = require('../models/bookModel');


const getAll = (req, res) => {
        getAllBooks(data => res.render("all", {all : data, title: "MAIN ALL BOOKS"}));
}

const updateItem = (req, res) => {
        updateItemBook(req.body.id, req.body.title, (data) => {res.end("Data was updated")});
}

const addItem = (req, res) => {
        addBook(req.body.title, req.body.author, req.body.date, (data) => {res.end("Data was added")});
}

const delItem = (req, res) => {
        delBook(req.params.id, (data) => {res.end("Data was deleted")});
}

const addItemAuthor = (req, res) => {
        addAuthor(req.body.firstName, req.body.lastName, req.body.email, data => {
                res.end("Data was added");
        })

}

module.exports = {
        getAll: getAll,
        updateItem: updateItem,
        addItem: addItem,
        delItem: delItem,
        addItemAuthor: addItemAuthor
}


