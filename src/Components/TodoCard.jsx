import React, { useState } from "react";
import { IoMdDoneAll } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";

const TodoCard = ({ Title, Description, Catagory, DeleteTodo, Task }) => {
  // States
  const [completeTask, setcompleteTask] = useState(false);
  return (
    <>
      <li className="lg:px-3 lg:py-6 px-5 py-4 lg:m-5 bg-white rounded-xl border-2 border-blue-600 flex flex-col gap-14 lg:gap-10 items-center justify-between w-full lg:w-[45%]">
        {/* Content */}
        <div className="content w-full flex flex-col gap-1 lg:px-5">
        <div className="catagory flex my-3">
            <p className="flex items-center justify-center gap-1 bg-blue-600 py-1 px-6 text-sm text-white font-normal rounded-full">
              {Catagory}
            </p>
          </div>
          <div className="title w-full flex text-blue-600 font-bold pl-2 teext-xl lg:text-2xl">
            <h1 className="">{Title}</h1>
          </div>
          <div className="desc pl-2 w-full flex items-center my-2 text-blue-600 font-light text-lg lg:text-xl">
            <p className=" flex items-center justify-center text-black font-bold gap-2">Task <span className="text-black text-[16px] font-normal">{Description}</span></p>
          </div>
        
        </div>

        {/* Buttons */}
        <div className="btns w-full justify-end flex gap-2">
          {/* Complete Task */}
          <div className="complete-btn">
            <button
              onClick={() => {
                setcompleteTask(true);
              }}
              className={`flex items-center gap-1 ${
                completeTask ? "bg-blue-950" : "bg-blue-600"
              }  py-1 px-4 text-[12px] lg:text-sm text-white font-medium rounded-full`}
            >
              <IoMdDoneAll /> {completeTask ? "Completed" : "Complete"}
            </button>
          </div>

          {/* Delete Button */}
          <div className="delete-btn ">
            <button
              onClick={() => {
                DeleteTodo(Task);
              }}
              className="flex items-center gap-1 bg-blue-600 py-1 px-4 text-[12px] lg:text-sm text-white font-medium rounded-full"
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
