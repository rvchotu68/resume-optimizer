import React, { useEffect, useState } from "react";

import { Navigate, useLocation } from "react-router-dom";

import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import Logo from "../../components/Logo/Logo";
import AuthProvider from "./AuthProvider";
import { useSelector } from "react-redux";
import { getUserData } from "../../store/userSlice";

function Auth() {
  const [authType, setAuthType] = useState("");
  const {
    state: { type, from },
  } = useLocation();

  const { uid, isAuthDone } = useSelector(getUserData);

  const to = from ? from : "/";

  useEffect(() => {
    setAuthType(type);
  }, []);

  if (!isAuthDone) return <p>Loading...</p>;

  if (uid) return <Navigate to="/" />;

  return (
    <div className="flex flex-col items-center justify-center p-[40px] laptop:flex-row laptop:justify-stretch laptop:p-0 laptop:items-stretch">
      <div className="left text-center   laptop:bg-blue-100 w-full laptop:min-h-screen laptop:flex laptop:flex-col laptop:justify-center  laptop:px-3 ">
        <div className="  tablet:mx-auto laptop:max-w-[700px] laptop:mx-auto tablet:max-w-[500px]">
          <div className="flex items-center justify-center laptop:justify-start ">
            <Logo width={120} height={120} />
            <p className="text-3xl text-[#1e293b]">
              job<span className="font-semibold">Verse</span>
            </p>
          </div>
          <h1 className="text-3xl font-semibold text-primary laptop:text-start laptop:text-4xl">
            Apply to jobs in 1-click
          </h1>
          <p className="text-secondary mt-3 text-sm laptop:text-2xl laptop:text-start">
            Power your entire job search, with our recruiter-approved Al.
          </p>
        </div>
      </div>
      <div className="right  p-4  flex flex-col justify-center  w-full laptop:p-3 laptop:min-h-screen laptop:items-center tablet:items-center  ">
        <div className="w-full flex flex-col items-center  tablet:max-w-[500px]">
          {authType == "login" ? (
            <Login setAuthType={setAuthType} to={to} />
          ) : (
            <SignUp setAuthType={setAuthType} to={to} />
          )}
          <AuthProvider to={to} />
        </div>
      </div>
    </div>
  );
}

export default Auth;
