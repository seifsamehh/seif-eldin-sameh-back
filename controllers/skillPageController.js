const SkillPage = require("../models/SkillPage");

module.exports = {
  getSkillsPage: async (req, res) => {
    try {
      let skillsPage = await SkillPage.find({});

      if (skillsPage.length === 0) {
        skillsPage = [
          {
            image:
              "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
            name: "HTML",
          },
          {
            image:
              "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
            name: "CSS",
          },
          {
            image:
              "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_640.png",
            name: "JavaScript",
          },
          {
            image: "https://cdn-icons-png.flaticon.com/512/5968/5968358.png",
            name: "SCSS",
          },
          {
            image:
              "https://icons-for-free.com/iconfiles/png/512/front+end+javascript+jquery+js+library+long+shadow+web+web-1320184848288229667.png",
            name: "JQuery",
          },
          {
            image:
              "https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png",
            name: "React-js",
          },
          {
            image:
              "https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp",
            name: "Next-js",
          },
          {
            image:
              "https://ms-f7-sites-prod-cdn.akamaized.net/docs/stories/1437095430260468447-mongodb-partner-professional-services-azure-private-link/resources/dca9bf66-c943-4b80-b36c-642c6a52066d/1448096482873501503_1448096482873501503",
            name: "MongoDB",
          },
          {
            image:
              "https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png",
            name: "Nodejs",
          },
          {
            image:
              "https://www.geekandjob.com/uploads/wiki/2e5b0058b2d38158b21439fe06e9b8fabe3cb139.png",
            name: "Express-js",
          },
          {
            image: "https://assets.strapi.io/uploads/Logo_tag_218c701790.png",
            name: "Strapi",
          },
          {
            image:
              "https://4allportal.com/wp-content/uploads/apirest_final.jpeg",
            name: "Rest-api",
          },
          {
            image:
              "https://cdn.icon-icons.com/icons2/2699/PNG/512/json_logo_icon_168490.png",
            name: "Json",
          },
          {
            image:
              "https://blog.devahoy.com/static/images/2019/08/jest-cover.png",
            name: "Jest",
          },
          {
            image:
              "https://miro.medium.com/v2/resize:fit:1200/1*1nS6PRlGUvj54IAJzig7qQ.png",
            name: "Gulp-js",
          },
          {
            image:
              "https://git-scm.com/images/logos/1color-orange-lightbg@2x.png",
            name: "Git",
          },
          {
            image: "https://pngimg.com/d/github_PNG65.png",
            name: "GitHub",
          },
          {
            image:
              "https://itcgroup.io/Image%20for%20Blog/What%20is%20Agile%20methodology-/What%20is%20Agile%20methodology-.png",
            name: "Agile",
          },
          {
            image:
              "https://logovectorseek.com/wp-content/uploads/2019/10/bootstrap-logo-vector.png",
            name: "Bootstrap",
          },
          {
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/2560px-Tailwind_CSS_logo.svg.png",
            name: "Tailwindcss",
          },
          {
            image:
              "https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2023/01/MaterialUi-2.png",
            name: "Material-ui",
          },
          {
            image:
              "https://super-static-assets.s3.amazonaws.com/726844e5-a1cb-4f61-85b9-4d8c282724f6/uploads/logo/c0390660-a469-4e1b-82ff-f5990a9d1675.png",
            name: "Spline",
          },
          {
            image: "https://ies.solutions/wordpress/wp-content/uploads/jwt.png",
            name: "JWT",
          },
        ];
        await SkillPage.insertMany(skillsPage);
      }

      res.status(200).json(skillsPage);
    } catch (error) {
      res.status(500).json({ message: "Server error." });
    }
  },
};
