import React, { useRef, useState, useEffect } from "react";

import auth from "../../services/fireAuth";
import ResumeUpload from "../../components/ResumeUpload/ResumeUpload";
import ResumePreview from "../../components/ResumePreview/ResumePreview";

function Resume() {
  const [isResumeUpload, setIsResumeUpload] = useState(true);
  const [resumeData, setResumeData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getToken = async () => {
    const token = await auth.currentUser.getIdToken();
    console.log(token);
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>loading</p>
      ) : isResumeUpload ? (
        <ResumeUpload
          setIsResumeUpload={setIsResumeUpload}
          setResumeData={setResumeData}
          setIsLoading={setIsLoading}
        />
      ) : (
        <ResumePreview
          setIsResumeUpload={setIsResumeUpload}
          resumeData={resumeData}
        />
      )}
    </>
  );
}

export default Resume;
