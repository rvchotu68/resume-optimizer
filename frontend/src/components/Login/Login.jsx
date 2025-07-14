import React from "react";
import { signInUserWithEmail } from "../../services/fireAuth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import AuthProvider from "../../pages/Auth/AuthProvider";

function Login({ setAuthType, to }) {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSignInBtnHandler = async (data) => {
    try {
      await signInUserWithEmail(data);
      navigate(to);
    } catch (err) {
      console.log(err.message);
    }
  };

  const formData = [
    {
      tag: "input",
      type: "text",
      name: "email",
      placeholder: "Email",
      label: "Email Address",
      id: "email",
    },
    {
      tag: "input",
      type: "password",
      name: "password",
      placeholder: "password",
      label: "Password",
      id: "password",
    },
    {
      tag: "button",
      value: "Login",
      id: "login",
      onClickFun: onSignInBtnHandler,
    },
  ];

  return (
    <div className="flex flex-col mt-4 w-full ">
      <h2 className="text-center text-2xl text-primary font-semibold mb-10">
        Login to your account
      </h2>
      <div className="flex flex-col mt-4">
        {formData.map((data) => {
          switch (data.tag) {
            case "input":
              return (
                <label
                  key={data.id}
                  className="flex flex-col text-sm font-semibold"
                >
                  <span className="mb-1">{data.label}</span>
                  <input
                    type={data.type}
                    {...register(data.name)}
                    placeholder={data.placeholder}
                    className="p-3 border mb-5 rounded-sm border-neutral-500 shadow-lg focus:outline-none"
                  />
                </label>
              );

            case "button":
              return (
                <button
                  key={data.id}
                  onClick={handleSubmit(data.onClickFun)}
                  className="p-3 rounded-2xl bg-blue-400 text-white font-semibold text-lg cursor-pointer"
                >
                  {data.value}
                </button>
              );
          }
        })}
      </div>
      <p className="ml-1 mt-1.5 text-[13px] font-semibold">
        Don't have an account?
        <button
          onClick={() => {
            setAuthType("signup");
          }}
          className="cursor-pointer"
        >
          <span className="text-blue-500 ml-1">Register</span>.
        </button>
      </p>
      <div className="relative mt-10">
        <div className="h-[1px] bg-neutral-300"></div>
        <p className=" text-neutral-600 px-2 absolute inline text-sm -top-2.5 left-1/2 -translate-x-1/2 z-10 bg-white text-center">
          Or login in with
        </p>
      </div>
    </div>
  );
}

export default Login;
