import React from "react";

const Navbar = () => {
  return (
    <div className="bg-slate-500 h-16 px-2 py-2">
      <div className="flex justify-between mx-auto w-[1000px]">
        <h1 className="text-3xl text-blue-950">👩‍💻 EM Service</h1>
        <div className="flex justify-around gap-3">
          <a className="hover:text-blue-50" href="/">
            Home
          </a>
          <a className="hover:text-blue-50" href="/">
            Profile
          </a>
          <a className="hover:text-blue-50" href="/">
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
