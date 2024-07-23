import React, { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import TodoContext from "../Context/todoContext";
import toast from "react-hot-toast";

const InputFields = ({ Show, setShow }) => {

  // UseContext to get data of todolist
  const { AddTodo } = useContext(TodoContext);

  //States
  const [todoInput, settodoInput] = useState({
    title: "",
    desc: "",
    catagory: "",
  });

  // Functions
  const onChangeHandler = (e) => {
    settodoInput({ ...todoInput, [e.target.name]: e.target.value });
  };
  const AddTodoFunc = (e) => {
    e.preventDefault();
    if (
      todoInput.title !== "" &&
      todoInput.desc !== "" &&
      todoInput.catagory !== ""
    ) {
      AddTodo(todoInput);
      toast.success("Todo Added!");
      settodoInput({ title: "", desc: "", catagory: "" });
    } else {
      toast.error("Please fill All fields!");
    }
  };

  // Return the input field box 
  return (
    <div
      className={`w-full z-10 h-screen absolute top-0 bg-black bg-opacity-80 ${
        Show ? "flex" : "hidden"
      } flex-col justify-center items-center`}
    >
      <div className="form w-[80%] p-5 bg-white relative py-10 rounded-xl border-2 border-black">
        <IoMdClose
          onClick={() => {
            setShow(!Show);
          }}
          className="absolute top-0 right-0 m-5 text-3xl font-bold"
        />
        <h1 className="text-3xl text-blue-800 font-bold text-center">
          Add New Task !
        </h1>
        <div className="fields flex justify-center  flex-wrap my-10 w-full items-center gap-5">
          <div className="field-item flex flex-col w-[40%] gap-1">
            <label className="text-xl font-bold text-blue-600" htmlFor="title">
              Title :
            </label>
            <input
              id="title"
              className="border-2 border-blue-600 text-lg rounded-full py-2 px-3 outline-none"
              type="text"
              placeholder="Enter Title"
              name="title"
              onChange={onChangeHandler}
              value={todoInput.title}
            />
          </div>
          <div className="field-item flex flex-col w-[40%] gap-1">
            <label className="text-xl font-bold text-blue-600" htmlFor="title">
              Description :
            </label>
            <input
              id="title"
              className="border-2 border-blue-600 text-lg rounded-full py-2 px-3 outline-none"
              type="text"
              placeholder="Enter Description"
              name="desc"
              onChange={onChangeHandler}
              value={todoInput.desc}
            />
          </div>
          <div className="field-item flex flex-col w-[40%] gap-1">
            <label className="text-xl font-bold text-blue-600" htmlFor="title">
              Catagory :
            </label>
            <input
              id="title"
              className="border-2 border-blue-600 text-lg rounded-full py-2 px-3 outline-none"
              type="text"
              placeholder="Enter Catagory"
              name="catagory"
              onChange={onChangeHandler}
              value={todoInput.catagory}
            />
          </div>
        </div>
        <div className="btn w-full flex justify-center items-center">
          <button
            onClick={AddTodoFunc}
            className="py-2 px-6 bg-blue-800 rounded-full text-white font-bold flex justify-center items-center w-[40%]"
          >
            Add To-Do
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputFields;
