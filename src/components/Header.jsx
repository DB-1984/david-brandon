export default function Header() {
  return (
    <header className="px-6 py-6 bg-white/10 shadow-lg text-black mx-auto flex justify-between items-center">
      <span className="text-lg font-black">David Brandon</span>

      <nav className="flex gap-6 text-sm">
        <a href="#work" className="hover:opacity-60 transition">
          Work
        </a>

        <a href="#contact" className="hover:opacity-60 transition">
          Contact
        </a>
      </nav>
    </header>
  );
}
