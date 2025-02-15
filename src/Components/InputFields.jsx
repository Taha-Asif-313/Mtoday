import React, { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import TodoContext from "../Context/todoContext";
import toast from "react-hot-toast";

const InputFields = ({ Show, setShow }) => {
  // UseContext to get data of todolist
  const { addTodo } = useContext(TodoContext);

  //States
  const [todoInput, settodoInput] = useState({
    desc: "",
    catagory: "",
    textColor: "#000000",
    bgColor: "#ffffff",
    completed: false,
  });

  // Functions
  // OnChange function
  const onChangeHandler = (e) => {
    settodoInput({ ...todoInput, [e.target.name]: e.target.value });
  };

  const addTodoFunc = (todo) => {
    settodoInput({
      desc: "",
      catagory: "",
      textColor: "#000000",
      bgColor: "#ffffff",
      completed: false,
    });
    addTodo(todo);
  };

  // Return the input field box
  return (
    <div
      class={`${
        Show ? "flex" : "hidden"
      } fixed inset-0 p-4 flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]`}
    >
      <div class="w-full max-w-lg bg-white shadow-lg rounded-md p-5 relative">
        <svg
          onClick={() => setShow(false)}
          xmlns="http://www.w3.org/2000/svg"
          class="w-3.5 shrink-0 fill-gray-800 hover:fill-primary cursor-pointer float-right"
          viewBox="0 0 320.591 320.591"
        >
          <path
            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
            data-original="#000000"
          ></path>
          <path
            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
            data-original="#000000"
          ></path>
        </svg>
        <div class="my-4 text-center">
          <h4 class="text-2xl text-gray-800 font-bold">Add new task!</h4>
          <p class="text-sm text-gray-500 mt-2">
            You can decide the title, description and background color.
          </p>
          <div className="mt-6">
            <input
              type="text"
              name="catagory"
              onChange={onChangeHandler}
              value={todoInput.catagory}
              placeholder="Enter Title"
              class="px-4 py-2.5 bg-[#f0f1f2] text-gray-800 w-full text-sm focus:bg-transparent outline-primary rounded-md placeholder:text-zinc-500"
            />
            <input
              type="text"
              name="desc"
              onChange={onChangeHandler}
              value={todoInput.desc}
              placeholder="Enter Description"
              class="px-4 py-2.5 mt-2 bg-[#f0f1f2] text-gray-800 w-full text-sm focus:bg-transparent outline-primary rounded-md placeholder:text-zinc-500"
            />
            <div className="mt-2 px-2 flex items-center justify-between gap-2">
              <p class="text-sm text-gray-500">Pick text color</p>
              <input
                className="rounded-full outline-none border-none"
                type="color"
                name="textColor"
                onChange={onChangeHandler}
                value={todoInput.textColor}
              />
            </div>
            <div className="mt-2 px-2 flex items-center justify-between gap-2">
              <p class="text-sm text-gray-500">Pick bg color</p>
              <input
                className="rounded-full outline-none border-none"
                type="color"
                name="bgColor"
                onChange={onChangeHandler}
                value={todoInput.bgColor}
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => addTodoFunc(todoInput)}
          class="px-5 py-2.5 w-full rounded-md text-white text-sm outline-none bg-primary hover:bg-teal-700"
        >
          Add new task
        </button>
      </div>
    </div>
  );
};

export default InputFields;
