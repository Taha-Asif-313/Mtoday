import React from "react";
import TodoApp from "./Components/TodoApp";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <TodoApp />
      <Toaster />
    </div>
  );
};

export default App;
