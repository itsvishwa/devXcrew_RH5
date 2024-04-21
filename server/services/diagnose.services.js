const Diagnose = require('../models/diagnose.models');
const User = require('../models/user.model');
const createDiagnose = async (diagnoseData) => {
  try {
    const diagnose = new Diagnose(diagnoseData);
    await diagnose.save();
    return diagnose;
  } catch (error) {
    throw error;
  }
}

const getHistory = async ({nic}) => {
  console.log(nic);
  const user = await User.findOne({ nic });
  const history = await Diagnose.find({ patient: user._id }, { input_date: 1, diagnosis: 1, doctor: 1 }).populate('doctor');

  if(!history){
    throw new Error("history not found");
  }

  return history;

}

module.exports = {
  createDiagnose,
  getHistory
};
