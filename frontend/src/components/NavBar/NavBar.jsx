import React from "react";
import Logo from "../Logo/Logo";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserData } from "../../store/userSlice";

import Profile from "../Profile/Profile";

function NavBar() {
  const navigate = useNavigate();
  const { uid } = useSelector(getUserData);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg flex items-center justify-between px-1">
      <div className="left flex items-center">
        <Logo width={80} height={80} />
        <p className="text-2xl text-[#1e293b]">
          job<span className="font-semibold">Verse</span>
        </p>
      </div>
      <div className="right">
        {uid ? (
          <Profile />
        ) : (
          <div className="flex gap-2">
            <button
              className="large:px-5 large:py-2.5 px-3 py-1 text-sm tablet:px-4 tablet:py-2 tablet:py cursor-pointer text-center font-semibold border  border-blue-300 text-blue-500 rounded-sm"
              onClick={() => {
                navigate("/auth", { state: { type: "login" } });
              }}
            >
              Login
            </button>
            <button
              className="large:px-5 large:py-2.5 px-3 py-1 text-sm tablet:px-4  tablet:py-2 cursor-pointer text-center font-semibold bg-blue-500 rounded-sm text-white"
              onClick={() => {
                navigate("/auth", { state: { type: "signup" } });
              }}
            >
              Sign up
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
