import { motion } from "framer-motion";
import StackIcons from "./StackIcons";
import heroImg from "../assets/DB.png";
import StackRow from "./StackIcons";

export default function Hero() {
  return (
    <section className="px-6 py-16 lg:mx-auto grid md:grid-cols-2 mx-6 gap-12 items-center">

      {/* LEFT: TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
          Full-stack developer building clean, scalable web applications.
        </h1>

        <p className="mt-6 text-base text-black/80 max-w-xl">
          Hi -I'm David. I design and develop modern web apps and websites using<strong>React, Django, NextJS, WordPress FSE,</strong> and
          performant backend systems such as <strong>Node, PostgreSQL, MongoDB,</strong> and <strong>Supabase.</strong>
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex gap-4">
          <a
            href="#work"
            className="px-6 py-3 bg-black text-white rounded-full text-xs md:text-sm hover:opacity-80 transition"
          >
            View work
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-black rounded-full text-xs md:text-sm hover:bg-black hover:text-white transition"
          >
            Contact
          </a>
        </div>

        {/* STACKS */}
        <p className="mt-10 text-sm text-black leading-relaxed">
          React · Next.js · Django · Node · PostgreSQL · Tailwind · WordPress FSE · MongoDB
        </p>
        <StackRow />
      </motion.div>

      {/* RIGHT: IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="flex justify-center"
      >
        <img
          src={heroImg}
          alt="David Brandon"
          className="object-cover object-top rounded-2xl grayscale hover:grayscale-0 transition duration-700"
        />
      </motion.div>

    </section>
  );
}