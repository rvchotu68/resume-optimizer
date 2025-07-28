import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Markdown from "react-markdown";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { generateFile } from "../../utility/file";

function ResumePreview({ setIsResumeUpload, resumeData }) {
  const {
    optimized_resume_for_pdf,
    optimized_resume_for_display,
    ats_score,
    suggestions,
  } = resumeData;

  const [pdfURl, setPdfURl] = useState("");

  const generatePDF = async () => {
    const data = await generateFile(optimized_resume_for_pdf);
    setPdfURl(data);
  };

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(pdfURl);
    };
  }, []);

  return (
    <div className=" w-[1000px] mx-auto   border-neutral-400 mt-[100px]">
      <h2 className="text-neutral-950 text-lg font-semibold">
        Optimized Resume
      </h2>
      <div className="border-2 p-4 mt-2 relative">
        <p className="absolute z-[5] right-10 text-lg border-4 flex justify-center items-center w-[60px] h-[60px] rounded-full">
          {ats_score}
        </p>
        <Markdown>{optimized_resume_for_display}</Markdown>
      </div>
      <div className="mt-10">
        <h2 className="text-neutral-950 text-lg font-semibold">Suggestions</h2>
        <div className="border-2 p-4 my-2">
          {suggestions.map((suggestion) => (
            <p className=" my-2 text-neutral-950 font-semibold">
              -{suggestion}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <button
          className="px-3 py-1.5 bg-black text-white rounded-sm mb-4 cursor-pointer mr-4"
          onClick={() => {
            generatePDF();
          }}
        >
          {pdfURl === "" ? (
            "Generate the Resume"
          ) : (
            <a href={pdfURl} download="resume.pdf">
              {" "}
              Download the Resume
            </a>
          )}
        </button>
        <button
          className="px-3 py-1.5 bg-black text-white rounded-sm mb-4 cursor-pointer"
          onClick={() => {
            setIsResumeUpload(true);
          }}
        >
          Create new Resume
        </button>
      </div>
    </div>
  );
}

export default ResumePreview;
