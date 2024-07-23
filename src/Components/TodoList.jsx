import React, { useContext } from "react";

import TodoCard from "./TodoCard";
import TodoContext from "../Context/todoContext";

const TodoList = () => {
  const { todoList, DeleteTodo, DeleteAll } = useContext(TodoContext);

  return (
    <>
      <h1 className="text-5xl font-bold text-black py-10 mt-20">Your Tasks</h1>
      <ul className="min-h-80 py-10 relative flex lg:flex-row flex-col lg:gap-0 gap-4 flex-wrap justify-center items-center w-full px-8 lg:px-20">
        <button
          onClick={DeleteAll}
          className={`${
            todoList.length === 0 ? "hidden" : "block"
          } absolute text-sm mx-8 lg:mx-44 top-0 right-0 px-6 py-1 hover:bg-blue-600 hover:text-white rounded-full border border-blue-600`}
        >
          Delete All
        </button>
        {todoList.length === 0 ? (
          <div className="">No task found</div>
        ) : (
          todoList.map((task, index) => {
            return (
              <>
                <TodoCard
                  key={index}
                  Title={task.title}
                  Description={task.desc}
                  Catagory={task.catagory}
                  DeleteTodo={DeleteTodo}
                  Task={task}
                />
              </>
            );
          })
        )}
      </ul>
    </>
  );
};

export default TodoList;
