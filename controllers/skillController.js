const Skill = require("../models/Skill");

module.exports = {
  getSkills: async (req, res) => {
    try {
      let skills = await Skill.find({});

      if (skills.length === 0) {
        skills = [
          { name: "HTML" },
          { name: "CSS" },
          { name: "JavaScript (Es6+)" },
          { name: "SCSS" },
          { name: "JQuery" },
          { name: "React.js" },
          { name: "Next.js" },
          { name: "MongoDB" },
          { name: "Nodejs" },
          { name: "Express.js" },
          { name: "Strapi" },
          { name: "Rest api" },
          { name: "Json" },
          { name: "Jest" },
          { name: "Gulp.js" },
          { name: "Git" },
          { name: "GitHub" },
          { name: "Agile" },
          { name: "Bootstrap" },
          { name: "Tailwindcss" },
          { name: "Material ui" },
          { name: "Spline" },
          { name: "JWT" },
        ];
        await Skill.insertMany(skills);
      }

      res.status(200).json(skills);
    } catch (error) {
      res.status(500).json({ message: "Server error." });
    }
  },
};
