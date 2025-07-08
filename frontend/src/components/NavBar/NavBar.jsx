import React from "react";
import Logo from "../Logo/Logo";

function NavBar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-lg flex items-center justify-between px-1">
      <div className="left flex items-center">
        <Logo width={80} height={80} />
        <p className="text-2xl text-[#1e293b]">
          job<span className="font-semibold">Verse</span>
        </p>
      </div>
      <div className="right">buttons</div>
    </div>
  );
}

export default NavBar;
