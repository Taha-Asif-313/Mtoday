import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const AddTodoBtn = () => {

  return (
    <div>

      <button className="text-sm lg:text-lg py-5 font-bold flex items-center gap-2">
        <IoMdAdd  className="lg:text-3xl text-2xl p-1 bg-primary text-black rounded-full font-bold" />{" "}
       <span className=""> Add New Task</span>
      </button>
    </div>
  );
};

export default AddTodoBtn;
