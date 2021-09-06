const express = require('express');
const {getUpload} = require("../servers/saveImages");
const up = getUpload();

const {getAll, updateItem, addItem, delItem, addItemAuthor} = require("../controllers/dbControll");
const {addImage} = require("../controllers/saveFileControll");

const router = express.Router();

router.post("/api/books", getAll);
router.put("/api/book/add", addItem);
router.put("/api/book/update", updateItem);
router.delete("/api/book/del/:id", delItem);
router.put("/api/author/add", addItemAuthor);
router.post("/api/saveimage", up.any(), addImage);


module.exports = router;




