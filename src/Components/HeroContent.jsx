"use client";
import React from "react";
import { motion } from "framer-motion";
import { ListTodo, CheckCircle2, ClipboardList, NotebookPen, Sparkles, Zap, Target, ArrowRight } from "lucide-react";

const HeroContent = () => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center bg-black text-white overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        {/* Dynamic Gradient Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[90px]"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Enhanced Floating Icons with Trails */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${10 + (i * 12)}%`,
            }}
          >
            {i % 4 === 0 && <ListTodo className="text-cyan-400/20 w-8 h-8" />}
            {i % 4 === 1 && <CheckCircle2 className="text-green-400/20 w-7 h-7" />}
            {i % 4 === 2 && <ClipboardList className="text-purple-400/20 w-8 h-8" />}
            {i % 4 === 3 && <NotebookPen className="text-blue-400/20 w-7 h-7" />}
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 lg:px-8 xl:px-12">
        {/* Enhanced Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left space-y-8 lg:space-y-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full px-4 py-2 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">Next Generation Task Management</span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                Ultimate{" "}
              </span>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                To-Do
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed"
            >
              Transform your productivity with{" "}
              <span className="text-cyan-400 font-semibold">AI-powered</span> task management 
              and <span className="text-purple-400 font-semibold">smart categorization</span>
            </motion.p>
          </div>

          {/* Feature Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl"
          >
            {[
              { icon: Zap, text: "Lightning Fast", color: "text-yellow-400" },
              { icon: Target, text: "Smart Categories", color: "text-green-400" },
              { icon: Sparkles, text: "AI Powered", color: "text-purple-400" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <span className="text-sm font-medium text-gray-200">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 text-cyan-300 font-semibold hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                Watch Demo
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Enhanced Main Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0 relative"
        >
          <div className="relative">
            {/* Main Icon Container */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <div className="relative p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-cyan-500/10 border border-cyan-500/30 backdrop-blur-xl shadow-2xl">
                <ListTodo
                  size={240}
                  className="text-cyan-400 drop-shadow-[0_0_40px_#00ffcc]"
                />
                
                {/* Floating particles around main icon */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-cyan-400 rounded-full"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 1,
                    }}
                    style={{
                      top: `${20 + i * 30}%`,
                      left: `${10 + i * 40}%`,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Glow Effects */}
            <motion.div
              className="absolute -inset-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            {/* Orbital Elements */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-cyan-400/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ width: '400px', height: '400px' }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroContent;