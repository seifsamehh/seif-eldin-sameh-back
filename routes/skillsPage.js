const express = require("express");
const router = express.Router();
const skillPageController = require("../controllers/skillPageController");

router.get("/", skillPageController.getSkillsPage);

module.exports = router;
