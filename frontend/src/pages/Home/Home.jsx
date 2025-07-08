import React from "react";
import loadingImage from "./../../assets/landing_img.png";

function Home() {
  return (
    <div
      className=" p-1 flex flex-col-reverse  gap-10 laptop:flex-row 
    laptop:items-center  laptop:gap-1
    tablet:px-5  min-h-screen
    tablet:justify-center
    tablet:gap-10
    justify-center
    "
    >
      <div className="left ">
        <h1 className="text-5xl font-semibold text-primary laptop:text-4xl">
          AI-Powered Resume Builder
        </h1>
        <p className="text-secondary text-lg font-semibold mt-1">
          Build a resume optimized with relevant keywords to stand out in the
          job market.
        </p>
        <button className="mt-2 bg-blue-600 px-3 py-2 laptop:px-5  laptop:text-xl tablet:px-4 tablet:py-3 tablet:text-lg text-white border-0 rounded-sm font-semibold cursor-pointer ">
          Create Resume
        </button>
      </div>
      <div className=" right flex justify-center ">
        <img
          src={loadingImage}
          className="object-contain object-center tablet:max-h-[510px] laptop:max-h[600px] large:max-h-[800px]"
        />
      </div>
    </div>
  );
}

export default Home;
