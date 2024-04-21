import logo from "./../assets/logo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import apiClient from "../services/api_client";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const schema = yup.object().shape({
    nic: yup.string().required("Enter the NIC"),
    name: yup.string().required("Enter the name"),
    role: yup
      .string()
      .required("Enter the Role")
      .matches(/(admin|doctor|patient)/, "Enter a valid role"),
    bod: yup.date().required("Enter the Date of Birth"),
    password: yup.string().min(4).max(20).required("Enter the password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await apiClient.post("/auth/signup", {
        email: data.email,
        password: data.password,
        nic: data.nic,
        name: data.name,
        role: data.role,
        bod: data.bod,
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        return <Link to={"/"}></Link>;
      } else {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-80">
      <body className="grid min-h-screen place-content-center">
        <main className="text-center ">
          <div className="avatar">
            <div className="w-40 rounded-lg shadow-lg">
              <img src={logo} alt="" className="mx-auto mb-4" />
            </div>
          </div>
          <div className="mb-3 text-xl font-normal">Welcome, Sign Up Here</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2 d-form-control">
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
                  id="email-input"
                  type="text"
                  placeholder="Please enter NIC"
                  className="d-input d-input-bordered"
                  {...register("nic")}
                />
              </label>
              {errors.nic && (
                <p
                  className="text-red-500"
                  style={{ color: "red", fontSize: "12px" }}
                >
                  {errors.nic.message}
                </p>
              )}
            </div>
            <div className="mb-2 d-form-control">
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
                  id="email-input"
                  type="text"
                  placeholder="Enter the Name"
                  className="d-input d-input-bordered"
                  {...register("name")}
                />
              </label>
              {errors.name && (
                <p
                  className="text-red-500"
                  style={{ color: "red", fontSize: "12px" }}
                >
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="mb-2 d-form-control">
              <select
                id="role-input"
                className="w-full max-w-xs select select-bordered"
                {...register("role")}
              >
                <option disabled selected>
                  Select Role
                </option>
                <option value="admin">Admin</option>
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>
              </select>
              {errors.role && (
                <p
                  className="text-red-500"
                  style={{ color: "red", fontSize: "12px" }}
                >
                  {errors.role.message}
                </p>
              )}
            </div>
            <div className="mb-2 d-form-control">
              <label className="flex gap-2 spams-center spa input input-bordered items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  id="email-input"
                  type="date"
                  placeholder="bod"
                  className="d-input d-input-bordered"
                  {...register("bod")}
                />
              </label>
              {errors.bod && (
                <p
                  className="text-red-500"
                  style={{ color: "red", fontSize: "12px" }}
                >
                  {errors.bod.message}
                </p>
              )}
            </div>
            <div className="mb-2 d-form-control">
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
                  id="password-input"
                  type="text"
                  placeholder="Password"
                  className="d-input d-input-bordered"
                  {...register("password")}
                />
              </label>
              {errors.password && (
                <p
                  className="text-red-500"
                  style={{ color: "red", fontSize: "12px" }}
                >
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="d-form-control">
              <button
                type="submit"
                className="btn btn-active btn-neutral btn-wide"
              >
                Sign UP
              </button>
            </div>
          </form>
          <p className="mt-5 text-opacity-50 text-base-content">
            &copy; 2017–2021
          </p>
        </main>
      </body>
    </div>
  );
};
