const diagnoseService = require('../services/diagnose.services');

async function createDiagnose(req, res) {
  try {
    const diagnoseData = req.body;
    diagnoseData.patient = req.params.patient;
    diagnoseData.doctor = req.user.id;

    const newDiagnose = await diagnoseService.createDiagnose(diagnoseData);
    res.status(200).json(newDiagnose);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createDiagnose
};