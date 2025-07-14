import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { getUserData } from "../../store/userSlice";

function AuthGuard() {
  const { isAuthDone, uid } = useSelector(getUserData);
  const { pathname } = useLocation();

  if (!isAuthDone) {
    return <p className="mt-[100px]">Loading</p>;
  }

  if (!uid) {
    console.log("user is not logged in.. redirecting to login page ");
    return <Navigate to="/auth" state={{ type: "login", from: pathname }} />;
  }

  return <Outlet />;
}

export default AuthGuard;
