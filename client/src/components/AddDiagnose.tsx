import { useState } from "react";
import DoctorForm from "./DoctorForm";
import apiClient from "../services/api_client";
import Loading from "./Loading";

function AddDiagnose() {
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalid, setInvalid] = useState(false);
  const [isVerified, setVerified] = useState(false);
  const [userId, setUserID] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [_loading, _setLoading] = useState(false);

  const patientVerifyBtnHandler = (nic: String) => {
    setIsLoading(true);
    setInvalid(false);
    setVerified(false);
    apiClient
      .get("/user/verifyPatient/?nic=" + nic)
      .then((res) => {
        setName(res.data.name);
        setAge(res.data.age);
        setUserID(res.data.id);
        setVerified(true);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setInvalid(true);
        setIsLoading(false);
      });
  };

  const submitBtnHandler = (
    symptoms: String,
    diagnosis: String,
    medications: String,
    medicalTests: String
  ) => {
    _setLoading(true);
    apiClient
      .post(
        "/diagnose/" + userId,
        {
          input_date: Date.now(),
          symptoms: symptoms,
          diagnosis: diagnosis,
          medications: medications,
          medical_tests: medicalTests,
        },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        window.location.href = "http://localhost:5173/diagnose/add";
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  return (
    <>
      {_loading && <Loading />}
      <p className="mx-16 mt-8 text-xl font-medium">Add Patient Data</p>
      <div className="mx-16 my-4">
        <DoctorForm
          isLoading={isLoading}
          isInvalid={isInvalid}
          isVerified={isVerified}
          name={name}
          age={age}
          patientVerifyBtnHandler={patientVerifyBtnHandler}
          submitBtnHandler={submitBtnHandler}
        />
      </div>
    </>
  );
}

export default AddDiagnose;
