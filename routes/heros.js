const express = require("express");
const router = express.Router();
const heroController = require("../controllers/heroController");

router.get("/", heroController.getHero);

module.exports = router;
