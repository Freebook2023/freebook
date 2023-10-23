const Joi = require("joi");

exports.userValidate = async (req, res, next) => {
  try {
    const userSchema = Joi.object({
      fullName: Joi.string().trim().min(5),
      email: Joi.string().email().trim(),
      whichSocialMedia: Joi.string().trim(),
    })
    
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message
    })
  }
};
