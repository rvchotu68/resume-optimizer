import React from "react";
import { useForm } from "react-hook-form";
import { singUPUserWithEmail } from "../../services/fireAuth";
import { useNavigate } from "react-router-dom";

function SignUp({ setAuthType, to }) {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onRegisterBtn = async (data) => {
    const { first, last, email, password, imgUrl } = data;
    console.log(data);
    try {
      await singUPUserWithEmail(data);
      navigate(to);
    } catch (err) {
      console.log(err.message);
    }
  };

  const fetchData = [
    {
      tag: "input",
      type: "text",
      name: "first",
      placeholder: "First Name",
      label: "First Name",
      id: "firstName",
    },
    {
      tag: "input",
      type: "text",
      name: "last",
      placeholder: "Last Name",
      label: "Last Name",
      id: "lastName",
    },
    {
      tag: "input",
      type: "email",
      name: "email",
      placeholder: "Email Address",
      label: "Email Address",
      id: "emailAddress",
    },
    {
      tag: "input",
      type: "password",
      name: "password",
      placeholder: "Password",
      label: "Password",
      id: "password",
    },
    {
      tag: "input",
      type: "text",
      name: "imgURL",
      placeholder: "Image URL",
      label: "Image URL",
      id: "imgURL",
    },
    {
      tag: "button",
      value: "Register",
      onClickFun: onRegisterBtn,
      id: "register",
    },
  ];

  return (
    <div className="flex flex-col mt-4 w-full">
      <h2 className="text-center text-2xl text-primary font-semibold mb-10">
        Create account
      </h2>
      {fetchData.map((data) => {
        switch (data.tag) {
          case "input":
            return (
              <label
                key={data.id}
                className="flex flex-col text-sm font-semibold "
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
      <p className="ml-1 mt-1.5 text-[13px] font-semibold">
        Already have an account?
        <button
          onClick={() => {
            setAuthType("login");
          }}
          className="cursor-pointer"
        >
          <span className="text-blue-500 ml-1">Log in</span>.
        </button>
      </p>
      <div className="relative mt-10">
        <div className="h-[1px] bg-neutral-300"></div>
        <p className=" text-neutral-600 px-2 absolute inline text-sm -top-2.5 left-1/2 -translate-x-1/2 z-10 bg-white text-center">
          Or register with
        </p>
      </div>
    </div>
  );
}

export default SignUp;
