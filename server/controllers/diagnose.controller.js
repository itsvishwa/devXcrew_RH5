const diagnoseService = require('../services/diagnose.services');

const createDiagnose = async (req, res) => {
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

const getHistory = async (req, res) => {
  try{
    console.log(req.body);
    const history = await diagnoseService.getHistory(req.body);
    res.status(200).json(history);
  }catch(error){
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createDiagnose,
  getHistory
};