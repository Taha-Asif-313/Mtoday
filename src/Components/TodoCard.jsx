import React from "react";
import { CheckCircle2, Clock, Trash2, Edit3, MoreVertical } from "lucide-react";

const TodoCard = ({
  Description,
  Title,
  Completed,
  TextColor,
  BgColor,
  CompleteTodo,
  DeleteTodo,
  Task,
}) => {
  return (
    <li
      className="group relative w-full border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-950 to-black 
                 rounded-2xl px-6 py-7 flex flex-col gap-6 transition-all duration-500 
                 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,255,200,0.2)]
                 hover:scale-[1.02] backdrop-blur-sm"
      style={{ backgroundColor: BgColor }}
    >
      {/* Animated Gradient Border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition duration-500 group-hover:duration-200"></div>
      
      {/* Top Glow Accent */}
      <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-400/70 via-purple-400/70 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300"></span>

      {/* Content */}
      <div className="content w-full flex flex-col gap-4 text-white relative z-10">
        {/* Header with Status Badge */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="text-xs font-semibold tracking-wide text-cyan-400/90 
                       bg-cyan-900/20 border border-cyan-700/40 px-3 py-1.5 rounded-lg 
                       shadow-inner hover:bg-cyan-900/40 transition-all duration-300
                       hover:scale-105 backdrop-blur-sm"
          >
            {Title}
          </button>
          
          {/* Status Indicator */}
          <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium
            ${Completed 
              ? "bg-green-500/10 text-green-400 border-green-500/30" 
              : "bg-yellow-500/10 text-yellow-400 border-yellow-500/30"
            }`}>
            {Completed ? <CheckCircle2 size={14} /> : <Clock size={14} />}
            <span>{Completed ? "Completed" : "Pending"}</span>
          </div>
        </div>

        {/* Description */}
        <p
          className="text-base lg:text-lg font-light leading-relaxed tracking-wide text-gray-300 
                     px-1 select-none text-center transition-all duration-300
                     group-hover:text-gray-200"
          style={{ color: TextColor }}
        >
          {Description}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-3 relative z-10">
        {/* Complete Task Button */}
        <button
          onClick={() => CompleteTodo(Task)}
          className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-white 
                      transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105
                      backdrop-blur-sm border ${
                        Completed
                          ? "bg-green-600/90 hover:bg-green-500/90 border-green-400/30 hover:shadow-green-500/30"
                          : "bg-yellow-500/90 hover:bg-yellow-400/90 border-yellow-400/30 hover:shadow-yellow-400/30"
                      }`}
        >
          {Completed ? <CheckCircle2 size={18} /> : <Clock size={18} />}
          <span className="text-sm font-medium">
            {Completed ? "Completed" : "Mark Done"}
          </span>
        </button>

        {/* Delete Button */}
        <button
          onClick={() => DeleteTodo(Task)}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl 
                     bg-red-600/90 hover:bg-red-500/90 hover:shadow-red-500/30 text-white 
                     transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105
                     backdrop-blur-sm border border-red-400/30"
        >
          <Trash2 size={18} />
          <span className="text-sm font-medium">Delete</span>
        </button>

        {/* Edit Button (Optional) */}
        <button
          className="flex items-center justify-center p-2.5 rounded-xl 
                     bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white
                     transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105
                     backdrop-blur-sm border border-gray-600/30"
        >
          <Edit3 size={18} />
        </button>
      </div>

      {/* Hover Effect Dots */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <MoreVertical size={16} className="text-gray-400 hover:text-white cursor-pointer" />
      </div>

      {/* Progress Bar (for pending tasks) */}
      {!Completed && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 rounded-b-2xl overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse w-1/2"></div>
        </div>
      )}
    </li>
  );
};

export default TodoCard;