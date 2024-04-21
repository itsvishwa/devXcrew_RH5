const diagnoseService = require('../services/diagnose.services');
const {BRAIN_GPT_SECRET} = require('../config/config')

const createDiagnose = async (req, res) => {
  try {
    const diagnoseData = req.body;
    diagnoseData.patient = req.params.patient;
    diagnoseData.doctor = req.user.id;

    const newDiagnose = await diagnoseService.createDiagnose(diagnoseData);

    // send data to serverBrain
    axios.post('${BRAIN_GPT_SECRET}/index/diagnose/${diagnoseData.patient.nic}', newDiagnose)
    .then(response => {
        console.log('sended');
    })
    .catch(error => {
        console.error('Error:', error);
    });


    res.status(200).json(newDiagnose);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getHistory = async (req, res) => {
  try{
    console.log(req.query);
    const history = await diagnoseService.getHistory(req.query);
    res.status(200).json(history);
  }catch(error){
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createDiagnose,
  getHistory
};