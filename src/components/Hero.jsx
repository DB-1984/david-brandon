import heroImg from "../assets/DB.png";

console.log(heroImg);

export default function Hero() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-white/70 rounded-2xl items-center">
      <div>
        <h1 className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight">
          Full-stack developer building clean, scalable web applications.
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          I design and develop modern web products using React, Django, and
          performant backend systems.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#work"
            className="px-6 py-3 bg-black text-white rounded-full text-sm hover:opacity-80 transition"
          >
            View work
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-black rounded-full text-sm hover:bg-black hover:text-white transition"
          >
            Contact
          </a>
        </div>
        <p className="mt-10 text-sm text-gray-400">
          React · Next.js · Django · Node · PostgreSQL · Tailwind · WordPress
          FSE · MongoDB
        </p>
      </div>

      <div className="flex justify-center">
        <img
          src={heroImg}
          alt="David Brandon"
          className="rounded-2xl grayscale hover:grayscale-0 transition duration-700 shadow-xl"
        />
      </div>
    </section>
  );
}
