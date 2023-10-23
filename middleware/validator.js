const Joi = require("joi");

exports.userValidate = async (req, res, next) => {
  try {
    const userSchema = Joi.object({
      fullName: Joi.string().trim().min(5),
       
      whichSocialMedia: Joi.string().trim(),
    })
   .with("fullName", [ "whichSocialMedia"]);
    await userSchema.validateAsync(req.body);
    next() 
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message
    })
  }
};
