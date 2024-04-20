import { useState } from "react";
import DoctorForm from "./DoctorForm";
import apiClient from "../services/api_client";

function AddDiagnose() {
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalid, setInvalid] = useState(false);
  const [isVerified, setVerified] = useState(false);
  const [_isLoading, _setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const patientVerifyBtnHandler = (nic: String) => {
    _setIsLoading(true);
    setIsLoading(true);
    apiClient
      .get("/user/verifyPatient/?nic=" + nic)
      .then((res) => {
        setName(res.data.name);
        setAge(res.data.age);
        _setIsLoading(false);
        setVerified(true);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        _setIsLoading(false);
        setInvalid(true);
        setIsLoading(false);
      });
  };

  return (
    <>
      <p className="mx-16 mt-8 text-xl font-medium">Add Patient Data</p>
      <div className="mx-16 mt-4">
        <DoctorForm
          isLoading={isLoading}
          isInvalid={isInvalid}
          isVerified={isVerified}
          name={name}
          age={age}
          patientVerifyBtnHandler={patientVerifyBtnHandler}
        />
      </div>
    </>
  );
}

export default AddDiagnose;
