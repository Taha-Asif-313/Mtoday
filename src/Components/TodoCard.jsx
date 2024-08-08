import React, { useState } from "react";
import { IoMdDoneAll } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";

const TodoCard = ({
  Description,
  Catagory,
  Completed,
  CompleteTodo,
  DeleteTodo,
  Task,
}) => {
  return (
    <>
      <li className="lg:mx-24 lg:py-6 px-5 py-4 lg:m-5 rounded-lg border-2 border-primary flex lg:flex-row flex-col gap-5 lg:gap-10 items-center justify-between w-full lg:w-full">
        {/* Content */}
        <div className="content w-full flex flex-col">
          <div className="catagory flex ">
            <p className="flex items-center justify-center gap-1 bg-primary py-1 px-6 text-sm text-black font-semibold rounded-lg">
              {Catagory}
            </p>
          </div>
          <div className="desc pl-2 w-full flex items-center my-2 text-primary font-light text-lg lg:text-xl">
            <p className=" flex items-center justify-center text-black font-bold gap-2">
              <span className="text-black text-lg font-medium">
                {Description}
              </span>
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="btns w-full justify-center lg:justify-end flex gap-2">
          {/* Complete Task */}
          <div className="complete-btn">
            <button
              onClick={() => {
                CompleteTodo(Task);
              }}
              className={`flex items-center gap-1 ${
                Completed ? "bg-blue-950" : "bg-primary"
              }  py-1 px-4 text-[12px] lg:text-sm text-white font-semibold rounded-lg`}
            >
              <IoMdDoneAll /> {Completed ? "Completed" : "Complete"}
            </button>
          </div>

          {/* Delete Button */}
          <div className="delete-btn ">
            <button
              onClick={() => {
                DeleteTodo(Task);
              }}
              className="flex items-center gap-1 bg-primary py-1 px-4 text-[12px] lg:text-sm text-white font-semibold rounded-lg"
            >
              <AiOutlineDelete /> Delete
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default TodoCard;
