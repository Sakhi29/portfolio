import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="relative w-full text-white border-white border-2 bg-transparent backdrop-blur-md p-4 rounded-full shadow-lg">
        <div className="flex items-center justify-evenly">
          <div>About</div>
          <div>Projects</div>
          <div>Skills</div>
          <div>Contact Me</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
