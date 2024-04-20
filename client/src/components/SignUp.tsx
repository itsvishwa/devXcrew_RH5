import logo from "./../assets/_70889b13-c86b-466d-8c60-097428127f27.jpeg";
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
        <button
          className="absolute d-btn d-btn-square d-btn-ghost right-2 top-2"
          data-toggle-theme="dark"
          data-act-className="ACTIVEclassName"
        >
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M12,18V6C15.31,6 18,8.69 18,12C18,15.31 15.31,18 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z" />
          </svg>
        </button>

        <main className="text-center w-72">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img
                src={logo}
                alt=""
                width="120"
                height="57"
                className="mx-auto mb-4 rounded-full"
                style={{ borderRadius: "60%" }}
              />
            </div>
          </div>
          <div className="mb-3 text-2xl font-semibold">Please sign in</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2 d-form-control">
              <label className="flex items-center gap-2 input input-bordered">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
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
                <option disabled selected>Select Role</option>
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
              <label className="flex gap-2 spams-center spa input input-bordered">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
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
              >Sign UP</button>
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
