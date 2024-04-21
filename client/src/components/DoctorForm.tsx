import { useState } from "react";
import apiClient from "../services/api_client";
import axios from "axios";

interface Prop {
  isLoading: boolean;
  isInvalid: boolean;
  isVerified: boolean;
  name: String;
  age: String;
  patientVerifyBtnHandler: (nic: string) => void;
  submitBtnHandler: (
    symptoms: String,
    diagnosis: String,
    medications: String,
    medicalTests: String
  ) => void;
}

function DoctorForm({
  isLoading,
  isInvalid,
  isVerified,
  name,
  age,
  patientVerifyBtnHandler,
  submitBtnHandler,
}: Prop) {
  const [patientNIC, setPatientNIC] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [medications, setMedications] = useState("");
  const [medicalTests, setMedicalTests] = useState("");

  const [activeFrom, setActiveForm] = useState("");

  const [files, setFiles] = useState<FileList | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    setFiles(fileList);
  };

  const toggleForm = (form: string) => {
    setActiveForm(form);
  };

  const handleSubmit = async () => {
    if (files) {
      // Perform the submission logic here, using the selected files
      // You can access the files using the files variable
      console.log(files);
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }

      // Perform the submission using the formData object
      // You can use axios to send the data to the server
      // For example:
      const response = await apiClient.get("test/generate-upload-url/");

      console.log(response.data.uploadUrl);
      console.log(formData);
      const fileupdateresponse = await axios.patch(
        response.data.uploadUrl,
        formData,
        {
          headers: {
            "Content-Type": "application/octet-stream", // Set the content type to binary
          },
        }
      );
      console.log(fileupdateresponse.data);
    }
  };

  const discardBtnHander = () => {
    setSymptoms("");
    setDiagnosis("");
    setMedications("");
    setMedicalTests("");
  };

  return (
    <>
      <div className="p-8 rounded-md shadow-lg ">
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
          <div className="flex mt-2 justify-end">
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
            <div className="flex mt-2 justify-end pt-2">
              <span className="mr-2 text-success">Verified</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-success"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="avatar placeholder flex items-center bg-base-200 p-4 rounded-lg mt-4 border border-green-700">
              <div className="bg-neutral text-neutral-content rounded-full w-12">
                <span>V</span>
              </div>
              <span className="ml-8">Name: {name}</span>
              <span className="ml-8">Age: {age} years old</span>
            </div>
          </div>
        )}
        {isVerified && (
          <div className="mt-4">
            <div className="flex justify-center gap-6">
              <button
                onClick={() => {
                  toggleForm("Form1");
                }}
                className="btn btn-outline btn-accent rounded-full"
              >
                Input data
              </button>
              <button
                onClick={() => {
                  toggleForm("Form2");
                }}
                className="btn btn-outline btn-info rounded-full"
              >
                Input File
              </button>
            </div>
            <div className="divider"></div>

            {activeFrom === "Form1" && (
              <>
                <span>Add symptoms *</span>
                <textarea
                  placeholder="Additional symptoms"
                  className="w-full mt-4 mb-8 textarea textarea-bordered textarea-lg"
                  onChange={(event) => {
                    setSymptoms(event.target.value);
                  }}
                  value={symptoms}
                ></textarea>
                <span>Enter medical diagnosis *</span>
                <textarea
                  placeholder="Diagnosis"
                  className="w-full mt-4 mb-8 textarea textarea-bordered textarea-lg"
                  onChange={(event) => {
                    setDiagnosis(event.target.value);
                  }}
                  value={diagnosis}
                ></textarea>
                <span>Enter Medications *</span>
                <textarea
                  placeholder="Medications"
                  value={medications}
                  onChange={(event) => {
                    setMedications(event.target.value);
                  }}
                  className="w-full mt-4 mb-8 textarea textarea-bordered textarea-lg"
                ></textarea>
                <span>Enter Medical Tests</span>
                <textarea
                  placeholder="Medical tests"
                  className="w-full mt-4 mb-8 textarea textarea-bordered textarea-lg"
                  value={medicalTests}
                  onChange={(event) => {
                    setMedicalTests(event.target.value);
                  }}
                ></textarea>
                <div className="flex flex-row justify-between">
                  <button
                    onClick={() => {
                      discardBtnHander();
                    }}
                    className="btn btn-outline btn-error"
                  >
                    Discard
                  </button>
                  <button
                    className="btn btn-outline btn-success"
                    onClick={() => {
                      submitBtnHandler(
                        symptoms,
                        diagnosis,
                        medications,
                        medicalTests
                      );
                    }}
                  >
                    Submit Patient Data
                  </button>
                </div>
              </>
            )}
            {activeFrom === "Form2" && (
              <>
                <div>
                  {/* ... */}
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="file-input file-input-bordered w-full max-w-xs"
                  />
                  <div className="flex flex-row justify-end">
                    <button
                      className="mt-10 btn btn-outline btn-success"
                      onClick={handleSubmit}
                    >
                      Submit Patient Data
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default DoctorForm;
