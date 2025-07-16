import React, { useRef, useState } from "react";
import { sendResume } from "../../services/backend";
import { useSelector } from "react-redux";
import { getUserData } from "../../store/userSlice";
import { useEffect } from "react";
import auth from "../../services/fireAuth";

function Resume() {
  const [isForm, setIsForm] = useState(false);
  const [isJD, setIsJD] = useState(false);
  const [resume, setResume] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const file = useRef(null);

  const { uid } = useSelector(getUserData);

  const getToken = async () => {
    const token = await auth.currentUser.getIdToken();
    console.log(token);
  };

  useEffect(() => {
    getToken();
  }, []);

  const submitBtnHandler = async () => {
    const form = new FormData();
    form.append("resume", resume);
    form.append("jobDesc", jobDesc);
    console.log(resume, jobDesc);
    // try {
    //   const data = await sendResume(uid, jobDesc);
    // } catch (er) {
    //   console.log(er);
    // }
  };

  const deleteBtnHandler = () => {
    if (file.current.files.length > 0) {
      file.current.value = "";
      setResume(null);
      setIsForm(false);
    }
  };
  const fileOnChangeHandler = (e) => {
    setResume(e.target.files[0]);
    setIsForm(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-[40px] laptop:mt-[100px]">
      <div className="h-[300px] w-full  tablet:h-[350px] tablet:max-w-[650px] laptop:max-w-[900px] laptop:h-[450px] bg-neutral-200 rounded-sm flex flex-col justify-center gap-2 items-center">
        <input
          type="file"
          name="resumeFile"
          className="hidden"
          accept=".pdf,.doc,.docx"
          onChange={fileOnChangeHandler}
          ref={file}
        />
        <button
          onClick={() => {
            file.current.click();
          }}
          className={`cursor-pointer text-center font-semibold ${
            isForm ? "text-neutral-400 " : "text-neutral-700"
          } text px-5 py-2 border text-sm`}
          disabled={isForm ? true : false}
        >
          Upload Resume
        </button>
        <button
          className={`${
            isForm ? "opacity-100" : "opacity-0"
          } text-[12px] mt-2 font-semibold flex gap-2 text-neutral-500`}
          onClick={deleteBtnHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            className="bi bi-trash-fill fill-red-500"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
          </svg>{" "}
          {resume && resume.name}
        </button>
      </div>
      <div className="w-full mt-10 max-w-[1000px] tablet:max-w-[650px] laptop:max-w-[900px] ">
        <label>
          <p className="text-left mb-2 text-neutral-600 font-semibold">
            Enter Job Description
          </p>
          <textarea
            className=" border border-neutral-300 w-full h-[150px] tablet:h-[200px] laptop:h-[300px] focus:outline-none
            text-neutral-600 p-2
            "
            name="jobDesc"
            onChange={(e) => {
              if (e.target.value.length > 0) setIsJD(true);
              else setIsJD(false);
              setJobDesc(e.target.value);
            }}
          ></textarea>
        </label>
      </div>
      <button
        className={` ${
          isJD && isForm
            ? "bg-neutral-800 text-white"
            : "bg-neutral-200 text-neutral-400"
        } 
         px-8 py-3 mt-4 text-sm cursor-pointer font-semibold
        `}
        disabled={isJD && isForm ? false : true}
        onClick={() => submitBtnHandler()}
      >
        Submit
      </button>
    </div>
  );
}

export default Resume;
