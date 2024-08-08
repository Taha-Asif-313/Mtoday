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
    completed: false
  });

  // Functions
  // OnChange function
  const onChangeHandler = (e) => {
    settodoInput({ ...todoInput, [e.target.name]: e.target.value });
  };

  // Add todo task function
  const AddTodoFunc = (e) => {
    e.preventDefault();
    if (todoInput.desc !== "" && todoInput.catagory !== "") {
      addTodo(todoInput);
      settodoInput({ title: "", desc: "", catagory: "" });
    } else {
      toast.error("Please fill All fields!");
    }
  };

  // Return the input field box
  return (
    <div
      className={`w-full z-10 h-screen fixed top-0 bg-black bg-opacity-80 ${
        Show ? "flex" : "hidden"
      } flex-col justify-center items-center`}
    >
      {/* Form which is absolute or open as a popup */}
      <div className="form w-[80%] bg-white relative rounded-xl border-2 border-primary">
        <IoMdClose
          onClick={() => {
            setShow(!Show);
          }}
          className="absolute top-0 right-0 m-5 text-3xl font-bold cursor-pointer"
        />
        {/* Heading */}
        <h1 className="text-xl lg:text-3xl my-5 lg:my-10 pt-10 text-black font-bold text-center">
          Add New Task !
        </h1>
        {/* Input Fields */}
        <div className="fields flex px-5 lg:px-24 justify-between lg:flex-row flex-col flex-wrap my-5 w-full items-center gap-5">
          <div className="field-item flex flex-col w-full lg:w-[45%] lg:gap-1">
            <label className="text-xl font-bold text-black" htmlFor="catagory">
              Catagory :
            </label>
            <input
              id="catagory"
              className="border-2 border-black text-lg rounded-lg py-2 px-3 outline-none"
              type="text"
              placeholder="Enter Catagory"
              name="catagory"
              onChange={onChangeHandler}
              value={todoInput.catagory}
            />
          </div>
          <div className="field-item flex flex-col w-full">
            <label className="text-xl font-bold text-black" htmlFor="desc">
              Description :
            </label>
            <textarea
              id="desc"
              className="border-2 border-black text-lg rounded-lg py-2 px-3 outline-none"
              type="text"
              placeholder="Enter Description"
              name="desc"
              onChange={onChangeHandler}
              value={todoInput.desc}
            />
          </div>
        </div>
        {/* Add todo button */}
        <div className="btn w-full flex justify-center items-center">
          <button
            onClick={AddTodoFunc}
            className="py-2 px-6 my-10 bg-primary rounded-lg text-black font-bold flex justify-center items-center lg:w-[40%]"
          >
            Add To-Do
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputFields;
