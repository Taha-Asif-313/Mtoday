import React, { useContext } from "react";
import TodoCard from "./TodoCard";
import TodoContext from "../Context/todoContext";

const TodoList = () => {
  // taking todolist and functions from todoContext
  const { todoList, deleteTodo, completeTodo } = useContext(TodoContext);

  return (
    <>
      {/* Task section heading */}
      <h1 className="text-4xl text-center font-bold text-gray-900 py-10 lfgmt-10">
        Your Tasks
      </h1>
      {/* Tasks list */}
      <ul className="lg:px-24 relative grid lg:grid-cols-2 grid-cols-1 gap-10 w-full">
        {todoList.length === 0 ? (
          <div className="text-center lg:test-start min-h-80 ">No task found</div>
        ) : (
          todoList.map((task, index) => {
            return (
              <>
                {/* Task TodoCard Component */}
                <TodoCard
                  key={index}
                  Description={task.desc}
                  Catagory={task.catagory}
                  BgColor={task.bgColor}
                  TextColor={task.textColor}
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
