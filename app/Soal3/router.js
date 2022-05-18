const express = require("express");
const { viewPerson } = require("./controller");
const router = express.Router();

router.get("/person/:id", viewPerson);

module.exports = router;
