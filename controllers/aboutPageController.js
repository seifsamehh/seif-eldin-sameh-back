const AboutPage = require("../models/AboutPage");

module.exports = {
  getAboutPage: async (req, res) => {
    try {
      const aboutPage = await AboutPage.findOne({});

      if (!aboutPage) {
        const newAboutPage = new AboutPage({
          title: "I AM SEIF ELDIN SAMEH",
          image: "https://i.ibb.co/9TQvYQ6/me.webp",
        });
        await newAboutPage.save();

        aboutPage = newAboutPage;
      }

      res.status(200).json(aboutPage);
    } catch (error) {
      res.status(500).json({ message: "Server error." });
    }
  },
};
