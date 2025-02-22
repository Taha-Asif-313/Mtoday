import React, { useContext } from "react";
import TodoCard from "./TodoCard";
import TodoContext from "../Context/todoContext";

const TodoList = () => {
  // taking todolist and functions from todoContext
  const { todoList, deleteTodo, completeTodo } = useContext(TodoContext);

  return (
    <div className="h-screen w-full px-5">
      {/* Task section heading */}
      <h1 className="text-4xl text-center font-bold text-gray-900 py-10 mt-10">
        Today Tasks
      </h1>
      {/* Tasks list */}

      {todoList.length === 0 ? (
        <div className="text-center lg:test-start min-h-80 ">No task found</div>
      ) : (
        <ul className="lg:px-24 relative grid lg:grid-cols-3 grid-cols-1 gap-10 w-full">
          {todoList.map((task, index) => {
            return (
              <>
                {/* Task TodoCard Component */}
                <TodoCard
                  key={index}
                  Description={task.desc}
                  Title={task.title}
                  BgColor={task.bgColor}
                  TextColor={task.textColor}
                  Completed={task.completed}
                  CompleteTodo={completeTodo}
                  DeleteTodo={deleteTodo}
                  Task={task}
                />
              </>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
