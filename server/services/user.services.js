const User = require('../models/user.model');

const verifyPatient = async ({ nic }) => {

    const user = await User.findOne({ nic: nic, role: 'patient' });
    if(user){
        return {"id": user._id , "nic" : user.nic, "age" : user.age, "name" : user.name };
    }else{
        throw new Error("User Not Found");
    }

}

module.exports = {
    verifyPatient
}