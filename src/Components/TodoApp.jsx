import React, { useState } from "react";
import TodoList from "./TodoList";
import InputFields from "./InputFields";
import AddTodoBtn from "./AddTodoBtn";
import HeroContent from "./HeroContent";

const TodoApp = () => {
  return (
    <>
      <HeroContent />
      <hr className="h-[2px] bg-black text-black w-full" />
      <div className="h-screen w-full px-5">
        <TodoList />
      </div>
    </>
  );
};

export default TodoApp;
