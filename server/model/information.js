const mongoose = require("mongoose");
const schema = mongoose.Schema;

const personSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("information", personSchema);
