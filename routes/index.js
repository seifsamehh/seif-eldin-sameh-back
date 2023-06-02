const express = require("express");
const heroRoutes = require("./heros");
const aboutRoutes = require("./abouts");
const skillRoutes = require("./skills");
const projectRoutes = require("./projects");
const quoteRoutes = require("./quotes");
const ContactRoutes = require("./contactRoutes");
const AboutPageRoutes = require("./aboutPages");
const SkillPageRoutes = require("./skillsPage");
const router = express.Router();

router.use("/hero", heroRoutes);
router.use("/about", aboutRoutes);
router.use("/skills", skillRoutes);
router.use("/projects", projectRoutes);
router.use("/quote", quoteRoutes);
router.use("/quote", quoteRoutes);
router.use("/send-email", ContactRoutes);
router.use("/about-me", AboutPageRoutes);
router.use("/skill-page", SkillPageRoutes);

module.exports = router;
