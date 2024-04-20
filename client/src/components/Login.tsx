import logo from "./../assets/_70889b13-c86b-466d-8c60-097428127f27.jpeg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import apiClient from "../services/api_client";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Enter a valid email"),
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
      console.log(data);
      const response = await apiClient.post("/auth/signup", {
        email: data.email,
        password: data.password,
      });
      console.log(response);
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
          className="d-btn d-btn-square d-btn-ghost absolute right-2 top-2"
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

        <main className="w-72 text-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img
                src={logo}
                alt=""
                width="120"
                height="57"
                className="mx-auto mb-4"
              />
            </div>
          </div>
          <div className="mb-3 text-2xl font-semibold">Please sign in</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-form-control mb-2">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  {...register("email")}
                  type="text"
                  className="grow"
                  placeholder="Username Here"
                />
              </label>
              {errors.email && (
                <p
                  className="text-red-500"
                  style={{ color: "red", fontSize: "12px" }}
                >
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="d-form-control mb-2">
              <label className="input input-bordered flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="Password Here"
                  {...register("password")}
                />
              </label>
              <div>
                {errors.password && (
                  <p
                    className="text-red-500"
                    style={{ color: "red", fontSize: "12px" }}
                  >
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <div className="d-form-control mb-2">
              <div className="d-label justify-start gap-3">
                <input
                  type="checkbox"
                  className="d-toggle d-toggle-sm"
                  id="rememberme"
                />
                <label htmlFor="rememberme" className="label-text text-sm">
                  Remember me
                </label>
              </div>
            </div>
            <div className="d-form-control">
              <input
                type="submit"
                value="Sign in"
                className="d-btn d-btn-primary"
              />
            </div>
          </form>
          <p className="text-base-content mt-5 text-opacity-50">
            &copy; 2017–2021
          </p>
        </main>
      </body>
    </div>
  );
};
