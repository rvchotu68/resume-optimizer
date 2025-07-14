import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { signOutUser } from "../../services/fireAuth";
import { useSelector } from "react-redux";
import { getUserData } from "../../store/userSlice";

function Profile() {
  const navigate = useNavigate();
  const { displayName, photoURL } = useSelector(getUserData);
  const [show, setShow] = useState(false);

  const profileRef = useRef(null);

  useEffect(() => {
    const handleESC = (e) => {
      if (e.key === "Escape") {
        setShow(false);
      }
    };

    document.addEventListener("keydown", handleESC);

    return () => {
      document.removeEventListener("keydown", handleESC);
    };
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target))
        setShow(false);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="p-2 relative">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => {
          setShow((s) => !s);
        }}
        ref={profileRef}
      >
        <div className="w-10 h-10 rounded-full p-1 border border-neutral-400">
          <img
            src={photoURL}
            alt="profile pic"
            className=" object-contain rounded-full"
          />
        </div>
        <p className="text-[12px] font-semibold text-neutral-700">
          @{displayName}
        </p>
      </div>
      {show && (
        <div className="absolute  w-[150px] mr-2 top-[50px] z-10 bg-neutral-100 h-[130px] rounded-sm flex flex-col -left-4 items-center gap-2 ">
          <button
            className="py-1 rounded-sm text-[12px] text-neutral-700 bg-neutral-200 w-[100px]  font-semibold hover:bg-neutral-700 hover:text-neutral-200 cursor-pointer mt-4"
            onClick={async () => {
              try {
                await signOutUser();
                console.log("user signed out successfully");

                navigate("/");
              } catch (err) {
                console.log(err);
              }
            }}
          >
            signout
          </button>
          <button
            className="py-1 rounded-sm text-[12px] text-neutral-700 bg-neutral-200 w-[100px] font-semibold hover:bg-neutral-700 hover:text-neutral-200 cursor-pointer"
            onClick={async () => {
              try {
                await signOutUser();
                console.log("user signed out successfully");

                navigate("/");
              } catch (err) {
                console.log(err);
              }
            }}
          >
            Delete account
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
