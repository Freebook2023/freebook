const {UserData} = require('./../models');
const path = require('path')
exports.userDetail = async (req, res, next) => {
  try{
    const user = await new UserData(req.body);
    await user.save();
    return res.status(200).sendFile(path.join(__dirname, '../', 'files', 'PRICING.pdf'))
  }catch(err){
    return res.status(400).json({
      status: 400,
      message: err.message
    })
  }
}
