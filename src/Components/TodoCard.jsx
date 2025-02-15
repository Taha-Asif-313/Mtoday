import React from "react";
import { IoMdDoneAll } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { MdPendingActions } from "react-icons/md";

const TodoCard = ({
  Description,
  Catagory,
  Completed,
  TextColor,
  BgColor,
  CompleteTodo,
  DeleteTodo,
  Task,
}) => {
  console.log(BgColor);

  return (
    <li
      className="w-full lg:py-6 px-5 py-4 rounded-lg border border-gray-400 flex flex-col gap-5 lg:gap-10 items-center justify-between"
      style={{ backgroundColor: BgColor }} // ✅ Correct way to apply dynamic background
    >
      {/* Content */}
      <div className="content h-28 w-full flex flex-col">
        <div className="catagory flex">
          <p className="bg-primary py-0.5 px-6 text-white font-semibold leading-tight rounded-full">
            {Catagory}
          </p>
        </div>
        <div className="desc pl-2 w-full overflow-hidden flex items-center my-2 text-primary font-light text-lg lg:text-xl">
          <p className="flex items-center justify-center font-bold gap-2" style={{ color: TextColor }}>
            {/* ✅ Correct way to apply dynamic text color */}
            <span className="text-lg font-medium">{Description}</span>
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="btns w-full justify-end flex gap-2">
        {/* Complete Task */}
        <div className="complete-btn">
          <button
            onClick={() => CompleteTodo(Task)}
            className={`flex items-center gap-1 ${
              Completed ? "bg-green-600" : "bg-orange-600"
            } py-1 px-4 text-[12px] lg:text-sm text-white font-semibold rounded-full`}
          >
            {Completed ? <IoMdDoneAll /> : <MdPendingActions />} {Completed ? "Completed" : "Incomplete"}
          </button>
        </div>

        {/* Delete Button */}
        <div className="delete-btn">
          <button
            onClick={() => DeleteTodo(Task)}
            className="flex items-center gap-1 bg-red-600 py-1 px-4 text-[12px] lg:text-sm text-white font-semibold rounded-full"
          >
            <AiOutlineDelete /> Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoCard;
