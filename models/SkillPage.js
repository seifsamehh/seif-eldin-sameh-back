const mongoose = require("mongoose");

const skillPageSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("SkillPage", skillPageSchema);
