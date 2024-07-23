import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const AddTodoBtn = () => {

  return (
    <div>

      <button className="text-sm lg:text-lg my-2 font-bold flex items-center gap-2">
        <IoMdAdd  className="lg:text-3xl text-2xl p-1 bg-blue-600 rounded-full text-white" />{" "}
       <span className=""> Add New Task</span>
      </button>
    </div>
  );
};

export default AddTodoBtn;
