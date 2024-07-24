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
      <div className="flex w-full justify-between px-8 lg:px-20 py-5 gap-2">
        <div className="logo flex items-center gap-1">
          <LuListTodo className="text-2xl lg:text-4xl text-blue-600 font-bold" />
          <span className="lg:text-2xl text-lg font-bold">
            My <span className="text-blue-600">To-Do's</span>
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
