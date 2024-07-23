import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

  // States
  const [todoList, settodoList] = useState(()=>{
    const savedData = localStorage.getItem("TodoList");
    return savedData ? JSON.parse(savedData) : []
  });

  // Use Effect to store data in localStorage
  useEffect(() => {
    localStorage.setItem("TodoList",JSON.stringify(todoList))
  }, [todoList])
  
  // Functions used in TODO app

  // Function yo add todo
  const AddTodo = (todo) => {
    settodoList([...todoList, todo]);
  };

  // Function delete todo
  const DeleteTodo = (tasktoDelete) => {
    settodoList((prevTasks) =>
      prevTasks.filter((task) => task !== tasktoDelete)
    );
    toast.success("todo deleted");
  };

    // Function delete all todo's
  const DeleteAll = ()=>{
    settodoList([]);
      toast.success("All task Deleted!")
  }

  // Return with children
  return (
    <TodoContext.Provider value={{ todoList, AddTodo, DeleteTodo, DeleteAll }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
