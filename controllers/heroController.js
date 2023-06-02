const Hero = require("../models/Hero");

module.exports = {
  getHero: async (req, res) => {
    try {
      // Check if there is already a single Hero document in the database
      const hero = await Hero.findOne({});

      if (!hero) {
        // Create a new Hero document if there is no existing hero in the database
        const newHero = new Hero({
          title: "WELCOME TO MY WEBSITE",
          subtitle: "I AM SEIF ELDIN SAMEH",
          description: "MERN STACK DEVELOPER",
        });
        await newHero.save();

        // Update the hero variable to represent the newly created Hero document
        hero = newHero;
      }

      // Return the single Hero document
      res.status(200).json(hero);
    } catch (error) {
      res.status(500).json({ message: "Server error." });
    }
  },
};
