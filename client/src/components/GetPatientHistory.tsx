import { useState } from "react";
import apiClient from "../services/api_client";
import { PatientDiagnosisTable } from "./PatientDiagnosisTable";

function GetPatientHistory() {
    const [isLoading, setIsLoading] = useState(false);
    const [isInvalid, setInvalid] = useState(false);
    const [isVerified, setVerified] = useState(false);
    const [_isLoading, _setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [data, setdata] = useState([]);

    const patientVerifyBtnHandler = (nic: String) => {
        _setIsLoading(true);
        setIsLoading(true);
        apiClient
            .get("/diagnose/viewHistory/?nic="+nic,{
                headers: {
                    authorization: localStorage.getItem("token"),
                },
            })
            .then((res) => {
                setName(res.data.name);
                setAge(res.data.age);
                setdata(res.data.data)
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
            <p className="mx-16 mt-8 text-xl font-medium">Get Patient History</p>
            <div className="mx-16 mt-4">
                <PatientDiagnosisTable
                    isLoading={isLoading}
                    isInvalid={isInvalid}
                    isVerified={isVerified}
                    name={name}
                    age={age}
                    data={data}
                    patientVerifyBtnHandler={patientVerifyBtnHandler}
                />
            </div>
        </>
    );
}

export default GetPatientHistory;
