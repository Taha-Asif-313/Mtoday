"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ListTodo,
  CheckCircle2,
  ClipboardList,
  NotebookPen,
  Sparkles,
  Zap,
  Target,
  ArrowRight,
  Clock,
  ShieldCheck,
  Heart,
} from "lucide-react";

const LandingPage = () => {
  const reduceMotion = useReducedMotion();

  return (
    <main className="bg-[#0a0a0a] w-full text-white overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#00ba0f]/20 via-emerald-700/10 to-black" />

        {/* Floating Glows */}
        {!reduceMotion && (
          <>
            <motion.div
              className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#00ba0f]/10 rounded-full blur-3xl"
              animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-lime-500/10 rounded-full blur-2xl"
              animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}

        {/* Text + Icon */}
        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left space-y-4"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00ba0f]/10 to-emerald-600/10 border border-[#00ba0f]/30 rounded-full px-4 py-2 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#00ba0f]" />
              <span className="text-sm font-medium text-[#00ba0f]">
                LifeSync — Schedule Your Life Smartly
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
                Design Your Day,
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#00ba0f] via-lime-400 to-[#00ba0f] bg-clip-text text-transparent">
                Design Your Life
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              LifeSync helps you bring structure, focus, and calm to your daily
              flow — powered by AI, inspired by mindfulness.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              {[
                { icon: Zap, text: "Fast & Fluid", color: "text-yellow-400" },
                { icon: Target, text: "Goal Tracking", color: "text-[#00ba0f]" },
                { icon: Sparkles, text: "AI Enhanced", color: "text-lime-400" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-sm font-medium text-gray-200">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <button className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00ba0f] to-lime-500 font-semibold shadow-xl hover:shadow-[#00ba0f]/25 transition-all duration-300">
                <span className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button className="group px-8 py-4 rounded-2xl border border-[#00ba0f]/40 bg-[#00ba0f]/10 text-[#00ba0f] font-semibold hover:bg-[#00ba0f]/20 transition-all duration-300 backdrop-blur-sm">
                <span className="flex items-center gap-2">
                  Watch Demo
                  <div className="w-2 h-2 bg-[#00ba0f] rounded-full animate-pulse" />
                </span>
              </button>
            </div>
          </motion.div>

          {/* Logo/Icon Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <div className="relative p-10 rounded-3xl bg-gradient-to-br from-[#00ba0f]/10 via-lime-500/10 to-emerald-500/10 border border-[#00ba0f]/30 backdrop-blur-lg shadow-xl">
              <ListTodo
                size={180}
                className="text-[#00ba0f] drop-shadow-[0_0_25px_#00ba0f]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-24 px-6 lg:px-8 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00ba0f] to-lime-400 bg-clip-text text-transparent"
        >
          Why LifeSync?
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Your mind deserves clarity. LifeSync brings productivity and peace
          together — manage, reflect, and grow every day.
        </p>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 lg:px-8 pb-24">
        {[
          {
            icon: ClipboardList,
            title: "Smart Task Planning",
            desc: "AI helps you break big goals into clear, actionable steps.",
          },
          {
            icon: Clock,
            title: "Time Intelligence",
            desc: "See where your hours go and optimize your routines effortlessly.",
          },
          {
            icon: Heart,
            title: "Mindful Productivity",
            desc: "Stay calm, balanced, and motivated while achieving more.",
          },
          {
            icon: ShieldCheck,
            title: "Privacy First",
            desc: "Your data stays secure — productivity should never cost peace.",
          },
          {
            icon: CheckCircle2,
            title: "Progress Insights",
            desc: "Track completion rates and daily habits with stunning visuals.",
          },
          {
            icon: NotebookPen,
            title: "Life Notes",
            desc: "Journal and capture reflections right alongside your tasks.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="p-8 bg-gradient-to-br from-zinc-900/60 to-zinc-950 border border-zinc-800 rounded-2xl shadow-xl hover:shadow-[0_0_20px_rgba(0,255,160,0.08)]"
          >
            <item.icon className="w-10 h-10 text-[#00ba0f] mb-4" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-24 bg-gradient-to-br from-[#00ba0f]/10 via-black to-[#00ba0f]/10 text-center overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Start Planning Smarter with{" "}
            <span className="text-[#00ba0f]">LifeSync</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Take charge of your time — one mindful task at a time.
          </p>
          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00ba0f] to-lime-500 font-semibold shadow-xl hover:shadow-[#00ba0f]/30 transition-all duration-300">
            Get Started for Free
          </button>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-10 text-center text-gray-500 border-t border-zinc-800">
        © {new Date().getFullYear()} <span className="text-[#00ba0f]">LifeSync</span>. All rights reserved.
      </footer>
    </main>
  );
};

export default LandingPage;
