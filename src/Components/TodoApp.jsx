import React, { useState } from "react";
import TodoList from "./TodoList";
import HeroContent from "./HeroContent";

const TodoApp = () => {
  return (
    <>
      <HeroContent />
      <div className="h-screen w-full px-5">
        <TodoList />
      </div>
    </>
  );
};

export default TodoApp;
