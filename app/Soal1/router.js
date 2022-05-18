const express = require("express");
const { viewProduct } = require("./controller");
const router = express.Router();

router.get("/product", viewProduct);

module.exports = router;
