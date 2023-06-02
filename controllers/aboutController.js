const About = require("../models/About");

module.exports = {
  getAbout: async (req, res) => {
    try {
      const about = await About.findOne({});

      if (!about) {
        const newAbout = new About({
          description: `I am a MERN stack web developer with 3+ years of experience in
          building scalable and user-friendly web applications. I have a
          strong understanding of JavaScript, MongoDB, Express, React, and
          Node.js. I am also proficient in using web development tools and
          technologies such as Git, GitHub, and Strapi. I am a highly
          motivated and results-oriented individual with a proven track
          record of success. I am confident that I can use my skills and
          experience to make a significant contribution to your company.`,
        });
        await newAbout.save();

        about = newAbout;
      }

      res.status(200).json(about);
    } catch (error) {
      res.status(500).json({ message: "Server error." });
    }
  },
};
