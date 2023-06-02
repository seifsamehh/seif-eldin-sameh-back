const express = require("express");
const router = express.Router();
const quoteController = require("../controllers/quoteController");

router.get("/", quoteController.getQuote);

module.exports = router;
