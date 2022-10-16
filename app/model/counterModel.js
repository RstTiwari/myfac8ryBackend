const { default: mongoose } = require("mongoose");

let  counterSchema = mongoose.Schema({
  counterName: {
    type: "String",
    required: true,
    unique: true,
  },
  counterSeq: {
    type: "Number",
    required: true,
  },
});

module.exports = mongoose.model("counter", counterSchema);