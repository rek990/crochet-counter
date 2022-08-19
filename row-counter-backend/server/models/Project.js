const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Project = new Schema(
  {
    projectName: { type: String, required: true },
    savedRowCount: { type: Number, required: true },
  }
  //   { timestamps: true }
);

module.exports = mongoose.model("Project", Project);
