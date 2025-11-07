"use client";
import React, { useEffect, useState } from "react";
import {
  CheckCircle2,
  Clock,
  Trash2,
  Timer,
  Flag,
  Tag,
  MoreVertical,
  Pencil,
} from "lucide-react";

const TodoCard = ({ Task, CompleteTodo, DeleteTodo, EditTodo }) => {
  const { title, desc, completed, completeBy, createdAt, priority, category } =
    Task;

  const [remaining, setRemaining] = useState("");
  const [isExpired, setIsExpired] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const start = new Date(createdAt);
      const end = new Date(completeBy);
      const total = end - start;
      const elapsed = now - start;
      const diff = end - now;

      if (diff <= 0) {
        setRemaining("Expired");
        setIsExpired(true);
        setProgress(100);
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setRemaining(`${hours}h ${minutes}m ${seconds}s`);
        setProgress(Math.min((elapsed / total) * 100, 100));
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [createdAt, completeBy]);

  // Priority color styles
  const priorityColors = {
    high: "text-red-400 border-red-400/30 bg-red-500/10",
    normal: "text-yellow-400 border-yellow-400/30 bg-yellow-500/10",
    low: "text-blue-400 border-blue-400/30 bg-blue-500/10",
  };

  return (
    <li
      className={`group relative w-full border border-zinc-800 bg-gradient-to-br from-zinc-900 via-black to-zinc-950
                  rounded-2xl px-6 py-7 flex flex-col gap-5 transition-all duration-500
                  hover:shadow-[0_0_25px_rgba(0,255,160,0.15)] hover:scale-[1.02]
                  ${isExpired && !completed ? "opacity-60 cursor-not-allowed" : ""}
                  ${completed ? "border-primary/50" : ""}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between ">
        <h3
          className={`text-lg font-semibold ${
            completed ? "text-primary/80 line-through" : "text-primary"
          }`}
        >
          {title}
        </h3>

        {/* Status */}
        <div
          className={`absolute top-0 left-[50%] translate-x-[-50%] flex items-center gap-2 px-3 py-1.5 rounded-b-xl text-xs font-medium border transition-all
            ${
              completed
                ? "bg-green-500/10 text-green-400 border-green-400/30"
                : isExpired
                ? "bg-red-500/10 text-red-400 border-red-400/30"
                : "bg-yellow-500/10 text-yellow-400 border-yellow-400/30"
            }`}
        >
          {completed ? (
            <CheckCircle2 size={14} />
          ) : isExpired ? (
            <Timer size={14} />
          ) : (
            <Clock size={14} />
          )}
          <span>{completed ? "Completed" : isExpired ? "Expired" : "Pending"}</span>
        </div>

        {/* Dropdown Menu */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-2 text-zinc-400 hover:text-primary transition"
          >
            <MoreVertical size={18} />
          </button>

          {menuOpen && (
            <div
              className="absolute right-0 top-8 w-40 bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg
                         flex flex-col text-sm overflow-hidden z-50 animate-in fade-in-50 slide-in-from-top-2"
            >
              {!completed && !isExpired && (
                <button
                  onClick={() => {
                    CompleteTodo(Task);
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/10 transition-all"
                >
                  <CheckCircle2 size={16} /> Mark as Done
                </button>
              )}

              {!completed && (
                <button
                  onClick={() => {
                    EditTodo && EditTodo(Task);
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-blue-400 hover:bg-blue-400/10 transition-all"
                >
                  <Pencil size={16} /> Edit Task
                </button>
              )}

              <button
                onClick={() => {
                  DeleteTodo(Task);
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 text-red-400 hover:bg-red-500/10 transition-all"
              >
                <Trash2 size={16} /> Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed ${
          completed ? "text-gray-500 line-through" : "text-gray-300"
        }`}
      >
        {desc}
      </p>

      {/* Category + Priority */}
      <div className="flex items-center gap-3 text-xs">
        {category && (
          <div className="flex items-center gap-1.5 border border-primary/30 text-primary/80 bg-primary/5 px-2 py-1 rounded-lg">
            <Tag size={12} />
            {category}
          </div>
        )}
        <div
          className={`absolute top-0 left-0 flex items-center gap-1.5 px-2 py-1 rounded-ss-lg rounded-br-lg border text-xs font-medium ${priorityColors[priority]}`}
        >
          <Flag size={12} /> {priority}
        </div>
      </div>

      {/* Remaining Time */}
      {!completed && (
        <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
          <Timer size={14} className="text-primary" />
          <span>{isExpired ? "Deadline Passed" : `Time Remaining: ${remaining}`}</span>
        </div>
      )}

      {/* Progress Bar */}
      {!completed && !isExpired && (
        <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden mt-1">
          <div
            className="h-full bg-gradient-to-r from-primary via-lime-400 to-green-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </li>
  );
};

export default TodoCard;
