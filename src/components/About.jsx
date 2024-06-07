import React from "react";
import img from "../assets/snapedit_1717738486483.png";

export default function About() {
  return (
    <div className="relative">
      <div className="flex bg-gray-500 rounded-lg items-center justify-center ">
        <div className="flex flex-col gap-4 text-4xl text-black items-center justify-center">
          Hi I am Sakhi Rotliwala
          <div className="text-black text-2xl">
            Passionate MERN stack developer skilled in MongoDB, Express.js,
            React, and Node.js. I create dynamic, responsive web applications
            with a strong focus on user experience and performance. With a keen
            eye for detail and a commitment to clean code, I deliver innovative
            solutions that meet client needs and exceed expectations.
          </div>
        </div>
        <div className="">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
