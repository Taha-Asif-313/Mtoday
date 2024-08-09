import React, { useState } from "react";
import { LuListTodo } from "react-icons/lu";
import AddTodoBtn from "./AddTodoBtn";
import InputFields from "./InputFields";

const Navabar = () => {
  // States
  const [showInputBox, setshowInputBox] = useState(false);

  return (
    <>
      {/* Input Dialog box */}
      <InputFields Show={showInputBox} setShow={setshowInputBox} />

      {/* NavBar and items */}
      <div className="flex absolute top-0 left-0 w-full justify-between px-5 lg:px-24 gap-2">
        <div className="logo py-2 flex items-center gap-1">
          <img className="w-8" src="/logo.png" alt="" />
          <span className="lg:text-2xl text-lg font-bold">
            Catagorize <span className="text-primary">Work</span>
          </span>
        </div>
        <div onClick={() => setshowInputBox(!showInputBox)} className="addTodo">
          <AddTodoBtn />
        </div>
      </div>
    </>
  );
};

export default Navabar;
