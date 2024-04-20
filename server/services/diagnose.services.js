const Diagnose = require('../models/diagnose.models');

const createDiagnose = async (diagnoseData) => {
  try {
    const diagnose = new Diagnose(diagnoseData);
    await diagnose.save();
    return diagnose;
  } catch (error) {
    throw error;
  }
}

const getHistory = async ({patient}) => {
  const history = await Diagnose.find({ patient }, { input_date: 1, diagnosis: 1, doctor: 1 });

  if (!history) {
    throw new Error("patient history not found");
  }
}

module.exports = {
  createDiagnose,
  getHistory
};
