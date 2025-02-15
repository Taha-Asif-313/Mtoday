import React, { useState } from "react";
import InputFields from "./InputFields";
import { IoMdAdd } from "react-icons/io";

const Navabar = () => {
  // States
  const [showInputBox, setshowInputBox] = useState(false);

  return (
    <>
      {/* Input Dialog box */}
      <InputFields Show={showInputBox} setShow={setshowInputBox} />

      {/* NavBar and items */}
      <div className="flex absolute z-10 top-0 left-0 w-full justify-between px-5 lg:px-24 gap-2">
        <div className="logo py-2 flex items-center gap-1">
          <img className="w-8" src="/logo.png" alt="" />
          <span className="lg:text-lg text-lg font-bold">
            Catagorize <span className="text-primary">Work</span>
          </span>
        </div>

        <button onClick={()=>setshowInputBox(true)} className="text-sm cursor-pointer py-5 font-medium flex items-center gap-2">
          <IoMdAdd className="lg:text-3xl text-2xl p-1 bg-primary text-white rounded-full font-bold" />{" "}
          <span> Add New Task</span>
        </button>
      </div>
    </>
  );
};

export default Navabar;
