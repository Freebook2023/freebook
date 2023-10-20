const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  fullName: {
    type: String,
    trim: true,
    minlength: 5,
    required: [true, "Please Enter your Full Name"],
  },
  email: {
    type: String,
    trim: true,
    minlength: 5,
    required: [true, "No Email Sent"],
    unique: true,
  },

});

const User = model("User", userSchema);
module.exports = User;
