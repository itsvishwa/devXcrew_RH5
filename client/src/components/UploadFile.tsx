import logo from "./../assets/_70889b13-c86b-466d-8c60-097428127f27.jpeg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import apiClient from "../services/api_client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Prop {
    isVerified: boolean;
}

export const UploadFile = ({
    isVerified,
  }: Prop) => {
    // ...

    const [files, setFiles] = useState<FileList | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;
        setFiles(fileList);
    };

    const handleSubmit = () => {
        if (files) {
            // Perform the submission logic here, using the selected files
            // You can access the files using the `files` variable
            const formData = new FormData();
            for (let i = 0; i < files.length; i++) {
                formData.append("files", files[i]);
            }

            // Perform the submission using the formData object
            // You can use axios to send the data to the server
            // For example:
            axios.post("/api/submit", formData)
                .then((response) => {
                    // Handle the response
                })
                .catch((error) => {
                    // Handle the error
                });
            // For example, you can create a FormData object and append the files to it
        }
    };

    return (
        <>
            {isVerified && (
                <div>
                    {/* ... */}
                    <input type="file" multiple onChange={handleFileChange} />
                    <div className="flex flex-row justify-between">
                        <button className="btn btn-outline btn-error">Discard</button>
                        <button className="btn btn-outline btn-success" onClick={handleSubmit}>
                            Submit Patient Data
                        </button>
                    </div>
                </div>
            )}
        </>
    )
};
