import React, { useContext } from "react";

import TodoCard from "./TodoCard";
import TodoContext from "../Context/todoContext";

const TodoList = () => {
  // taking todolist and functions from todoContext
  const { todoList, deleteTodo, completeTodo } = useContext(TodoContext);

  return (
    <>
      {/* Task section heading */}
      <h1 className="text-4xl text-center font-bold text-black py-10 mt-10">
        Your Tasks
      </h1>
      {/* Tasks list */}
      <ul className="min-h-80 py-10 px-5 lg:px-24 relative flex lg:flex-row flex-col lg:gap-0 gap-4 flex-wrap justify-center items-center w-full">
        {todoList.length === 0 ? (
          <div className="">No task found</div>
        ) : (
          todoList.map((task, index) => {
            return (
              <>
                {/* Task TodoCard Component */}
                <TodoCard
                  key={index}
                  Description={task.desc}
                  Catagory={task.catagory}
                  Completed={task.completed}
                  CompleteTodo={completeTodo}
                  DeleteTodo={deleteTodo}
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
