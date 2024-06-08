import React from "react";
import img from "../assets/image.svg";

export default function About() {
  return (
    <div className="relative">
      <div className="flex flex-col-reverse mt-10 rounded-lg items-center justify-center md:flex-row">
        <div className="rubik-title flex flex-col gap-4 text-4xl text-white text-left md:text-7xl ">
          Hi, I am Sakhi Rotliwala
          <div className="font-sans text-white text-lg font-normal text-left md:text-2xl">
            Passionate MERN stack developer skilled in MongoDB, Express.js,
            React, and Node.js,creating dynamic, responsive web applications
            with a user-focused approach.
          </div>
        </div>
        <div className="">
          <img src={img} alt="image" />
        </div>
      </div>
    </div>
  );
}
