const Project = require("../models/Project");

module.exports = {
  getProjects: async (req, res) => {
    try {
      let projects = await Project.find({});

      if (projects.length === 0) {
        projects = [
          {
            image: "https://i.ibb.co/MhnqVFn/Final-Touch.webp",
            title: "Final Touch",
            description: `An interior designer website is a great way to showcase your work, connect with potential clients, and build your brand. When creating your website, it is important to keep your target audience in mind and design a site that is both visually appealing and informative. Your website should include a portfolio of your work, as well as information about your services, contact information, and pricing. You may also want to include a blog or news section to keep your website fresh and up-to-date.`,
            link: "https://final-touch-interior.vercel.app/",
          },
          {
            image: "https://i.ibb.co/c1nf9Tx/ieee.webp",
            title: "IEEE Community",
            description: `An e-learning website is a great way to deliver educational content online. It can be used to provide training for employees, offer courses to students, or even teach yourself new skills. When creating an e-learning website, it is important to keep your target audience in mind and design a site that is both visually appealing and easy to use. Your website should include a catalog of courses, as well as information about your instructors, pricing, and contact information. You may also want to include a blog or news section to keep your website fresh and up-to-date.`,
            link: "https://ieee-community.vercel.app/",
          },
          {
            image: "https://i.ibb.co/S78CVCK/golden-Hornet.webp",
            title: "Golden Hornet",
            description: `A software solutions website is a great way to showcase your company's expertise in developing and delivering software solutions. It can be used to generate leads, build brand awareness, and drive sales. When creating your software solutions website, it is important to keep your target audience in mind and design a site that is both visually appealing and informative. Your website should include a portfolio of your work, as well as information about your services, contact information, and pricing. You may also want to include a blog or news section to keep your website fresh and up-to-date.`,
            link: "https://golden-hornet-company.vercel.app/",
          },
          {
            image: "https://i.ibb.co/m5dXvQG/green-Army.webp",
            title: "Green Army",
            description: `A climate change problems website is a great way to raise awareness about the challenges that our planet is facing. It can be used to educate people about the causes and effects of climate change, as well as the solutions that are available. When creating a climate change problems website, it is important to keep your target audience in mind and design a site that is both visually appealing and informative. Your website should include information about the science of climate change, the impacts of climate change, and the solutions that are available. You may also want to include a blog or news section to keep your website fresh and up-to-date.`,
            link: "https://green-army.vercel.app/",
          },
          {
            image: "https://i.ibb.co/6F0V4Gm/sneakers.webp",
            title: "Sneakers",
            description: `An NFT website is a website that is designed to sell or trade NFTs. These websites typically allow users to create an account, upload their NFTs, and set a price for them. Users can then browse the website to find NFTs that they are interested in buying or trading.`,
            link: "https://sneakers-mauve-beta.vercel.app/",
          },
        ];

        await Project.insertMany(projects);
      }

      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ message: "Server error." });
    }
  },
};
