const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  batchTime: { type: String },
  monthlyFee: { type: String },
  participants: [{ userID: { type: String }, enrollmentMonth: String }],
});

const Class = mongoose.model("classes", classSchema);
module.exports = Class;
