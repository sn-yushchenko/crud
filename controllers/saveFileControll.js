const {addImageTodb} = require('../models/bookModel');


const addImage = (req, res) => {
    let path = __dirname + "/"+req.files[0].path;
    addImageTodb(req.files[0].filename, path, () => {res.end("Data was deleted")});
}



module.exports = {
    addImage: addImage,
}