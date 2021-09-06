const {getData} = require("../../servers/dbConnect");
const config = require("config");

function getAllBooks(callback) {
    const query = "SELECT b.title, a.first_name, last_name, email FROM book b INNER JOIN author a ON b.author = a.id;";
    getData(query, (data, connection) => {
        callback(data);
        connection.end();
    })

}

function updateItemBook(id,newTitle, callback){
    const query = "UPDATE book SET title ='" + newTitle + "' WHERE id = '"+ id +"';";
    console.log(newTitle);
    getData(query, (data, connection) => {
        callback(data);
        connection.end();
    })

}

function delBook(id, callback){
    const query = "DELETE FROM book WHERE id='" + id + "';";
    getData(query, (data, connection) => {
        callback(data);
        connection.end();
    })

}

function addBook(title, author, date, callback){
    const query = "INSERT INTO BOOK VALUES(0,'" + title + "'"+','+ "'" + author + "'" + ','+ "'" + date + "');";
    getData(query, (data, connection) => {
        callback(data);
        connection.end();
    })
}

function addAuthor(firstName, lastName, email, callback){
    const query = "INSERT INTO author VALUES(0,'" + firstName + "'"+','+ "'" + lastName + "'" + ','+ "'" + email + "');";
    getData(query, (data, connection) => {
        callback(data);
        connection.end();
    })
}

module.exports = {
    getAllBooks: getAllBooks,
    updateItemBook: updateItemBook,
    delBook: delBook,
    addBook: addBook,
    addAuthor: addAuthor
}