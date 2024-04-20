const Diagnose = require('../models/diagnose.models');

async function createDiagnose(diagnoseData) {
  try {
    const diagnose = new Diagnose(diagnoseData);
    await diagnose.save();
    return diagnose;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createDiagnose
};
