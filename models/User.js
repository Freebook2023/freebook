const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  fullName: {
    type: String,
    trim: true,
    minlength: 5,
     
  },
  email: {
    type: String,
    trim: true,
    minlength: 5,
    required: [true, "No Email Sent"],
  },
  whichSocialMedia: {
    type: String,
    trim: true,
  },
});

const User = model("User", userSchema);
module.exports = User;
