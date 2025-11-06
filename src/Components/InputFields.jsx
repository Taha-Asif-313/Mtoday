"use client";
import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import TodoContext from "../Context/todoContext";
import toast from "react-hot-toast";

const InputFields = ({ Show, setShow }) => {
  const { addTodo } = useContext(TodoContext);

  // States
  const [todoInput, setTodoInput] = useState({
    desc: "",
    title: "",
    textColor: "#ffffff",
    bgColor: "#1e293b",
    completed: false,
  });

  // Change handler
  const onChangeHandler = (e) => {
    setTodoInput({ ...todoInput, [e.target.name]: e.target.value });
  };

  // Submit handler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!todoInput.title.trim() || !todoInput.desc.trim()) {
      toast.error("Please fill all fields");
      return;
    }
    addTodo(todoInput);
    toast.success("Task added!");
    setTodoInput({
      desc: "",
      title: "",
      textColor: "#ffffff",
      bgColor: "#1e293b",
      completed: false,
    });
    setShow(false);
  };

  return (
    <AnimatePresence>
      {Show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center backdrop-blur-sm bg-black/70"
        >
          {/* Form container */}
          <motion.form
            onSubmit={onSubmitHandler}
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-md bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl shadow-2xl border border-zinc-700 p-6 text-white"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-primary transition"
            >
              <IoMdClose size={24} />
            </button>

            {/* Heading */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-white">
                Add New Task
              </h2>
              <p className="text-sm text-zinc-400 mt-1">
                Set your title, description, and custom colors.
              </p>
            </div>

            {/* Input Fields */}
            <div className="space-y-4">
              <input
                type="text"
                name="title"
                value={todoInput.title}
                onChange={onChangeHandler}
                placeholder="Enter title"
                className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary transition"
                required
              />

              <textarea
                name="desc"
                value={todoInput.desc}
                onChange={onChangeHandler}
                placeholder="Enter description"
                rows={3}
                className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 text-sm placeholder:text-zinc-500 resize-none focus:outline-none focus:ring-2 focus:ring-primary transition"
                required
              />

              {/* Color Pickers */}
              <div className="flex items-center justify-between gap-4">
                <label className="flex items-center gap-2 text-sm text-zinc-400">
                  Text Color:
                  <input
                    type="color"
                    name="textColor"
                    value={todoInput.textColor}
                    onChange={onChangeHandler}
                    className="w-6 h-6 border-none outline-none rounded-full"
                  />
                </label>

                <label className="flex items-center gap-2 text-sm text-zinc-400">
                  Background:
                  <input
                    type="color"
                    name="bgColor"
                    value={todoInput.bgColor}
                    onChange={onChangeHandler}
                    className="w-6 h-6 border-none outline-none rounded-full"
                  />
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full mt-6 py-3 rounded-lg bg-primary text-black font-semibold text-sm hover:bg-primary/90 transition"
            >
              Add Task
            </motion.button>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InputFields;
