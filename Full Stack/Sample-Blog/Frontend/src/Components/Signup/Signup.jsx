import { Button,ToastContainer,showToast } from "@cred/neopop-web/lib/components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";
import validatePassword from "./ValidatePassword";
import { useState, useEffect } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting},
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      let response = await fetch("http://localhost:3000/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      } else {
        setErrorMessage("");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setErrorMessage(error.message);
    }
  };
useEffect(() => {
  if(errorMessage){
      showToast(errorMessage, { type: 'error', autoCloseTime: '1000' });
      setErrorMessage("")
  }

}, [errorMessage])


  return (
    <section className="bg-white">
       <ToastContainer />
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-12 sm:h-8 cursor-pointer"
              src="../../../images/home/Logo.png"
              alt="logo"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <div className="relative flex items-center mt-8">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>

            <input
              type="text"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Username"
              {...register("username", {
                required: "* Username is required",
                minLength: { value: 5, message: "* Username too short" },
                maxLength: { value: 15, message: "* Username too long" },
              })}
            />
          </div>
          <div className="mt-1 text-red-500 text-sm">
            {errors.username && <span>{errors.username.message}</span>}
          </div>

          <div className="relative flex items-center mt-5">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>

            <input
              type="email"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email address"
              {...register("email", {
                required: "* Email is required",
                validate: (value) =>
                  isEmail(value) || "* Please enter a valid email",
              })}
            />
          </div>
          <div className="mt-1 text-red-500 text-sm">
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>

            <input
              type="password"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
              {...register("password", {
                required: "* Password is required",
                minLength: { value: 5, message: "* Password too short" },
                maxLength: { value: 15, message: "* Password too long" },
                validate: validatePassword,
              })}
            />
          </div>
          <div className="mt-1 text-red-500 text-sm">
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <div className="mt-6 flex justify-center">
            <Button
              variant="secondary"
              kind="elevated"
              size="small"
              colorMode="dark"
              type="submit"
              disabled={isSubmitting}
            >
              Sign up
            </Button>
          </div>
        
        </form>
      </div>
    </section>
  );
};

export default Signup;
