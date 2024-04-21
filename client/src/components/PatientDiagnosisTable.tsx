import { useState } from "react";
import Chat from "./Chat";
import Chart from "./Chart"

interface Prop {
  isLoading: boolean;
  isInvalid: boolean;
  isVerified: boolean;
  name: String;
  age: String;
  data: Array<any>;
  patientVerifyBtnHandler: (nic: string) => void;
}

export const PatientDiagnosisTable = ({
  isLoading,
  isInvalid,
  isVerified,
  name,
  age,
  data,
  patientVerifyBtnHandler,
}: Prop) => {
  const [patientNIC, setPatientNIC] = useState("");
  const [activeFrom, setActiveForm] = useState("");

  const toggleForm = (form: string) => {
    setActiveForm(form);
  }


  return (
    <>
      <div className="p-8 rounded-md shadow-lg bg-base-300">
        {/* Patient ID  */}
        <label className="flex items-center gap-2 input input-bordered">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Patient NIC"
            value={patientNIC}
            onChange={(event) => setPatientNIC(event.target.value)}
          />
          <button
            onClick={() => {
              patientVerifyBtnHandler(patientNIC);
            }}
            className="btn btn-sm btn-circle btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
          </button>
        </label>
        {isLoading && (
          <div className="flex justify-end mt-2 ">
            <span className="mr-2">Loading</span>
            <span className="loading loading-ring loading-md"></span>
          </div>
        )}
        {isInvalid && (
          <div className="flex justify-end mt-2">
            <span className="mr-2 text-error">Invalid Patient NIC</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-error"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
        {isVerified && (
          <div>
            <div className="flex justify-end mt-2 ">
              <span className="mr-2 text-success">Verified</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-success"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307a4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397a4.49 4.49 0 0 1-3.498 1.306a4.491 4.491 0 0 1-1.307 3.498A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549a4.49 4.49 0 0 1-3.498-1.306a4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497a4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex items-center p-4 mt-4 rounded-lg avatar placeholder bg-base-200">
              <div className="w-12 rounded-full bg-neutral text-neutral-content">
                <span>V</span>
              </div>
              <span className="ml-8">Name: {name || 'Lahiru'}</span>
              <span className="ml-8">Age: {age || '23'} years old</span>
            </div>
          </div>
        )}
        {isVerified && data ? (
        <div className="mt-10">
          <button onClick={() => {toggleForm("Form1");}} className="mr-10 btn btn-active btn-neutral">Table Data </button>
          <button onClick={() => { toggleForm("Form2");}} className="mr-10 btn btn-active btn-neutral">Chat</button>
          <button onClick={() => { toggleForm("Form3");}} className="btn btn-active btn-neutral">Chart</button>
          <div className="divider"></div>
          {activeFrom === "Form1" && (
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th></th>
                  <th>Date</th>
                  <th>Doctor</th>
                  <th>Diagnosis</th>
                </tr>
              </thead>
              <tbody>
                {data.map((diagnose, key) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{new Date(diagnose.input_date).toLocaleDateString()}</td>
                    <td>{diagnose.doctor.name}</td>
                    <td>{diagnose.diagnosis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>)}
          {activeFrom === "Form2" && (
            <Chat name={"vishwa Sandaruwan"} />
          )}
          {activeFrom === "Form3" && (
            <Chart/>
          )}
          </div>
        ) : (
          <div className="flex justify-center mt-4">
            <img src="path/to/picture" alt="No data available" />
          </div>
        )}
      </div>
    </>
  );
}
