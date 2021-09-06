const express = require('express');

const {getAll, updateItem, addItem, delItem, addItemAuthor} = require("../controllers/dbControll");

const router = express.Router();

router.post("/api/books", getAll);
router.put("/api/book/add", addItem);
router.put("/api/book/update", updateItem);
router.delete("/api/book/del/:id", delItem);

router.put("/api/author/add", addItemAuthor);


module.exports = router;




