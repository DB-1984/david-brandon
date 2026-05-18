export default function Footer() {
  return (
    <footer className="px-6 py-10 max-w-6xl mx-auto flex justify-between text-sm text-gray-400 border-t border-gray-200">
      <span>© 2026 David Brandon</span>

      <div className="flex gap-6">
        <a
          href="https://github.com/DB-1984"
          className="hover:text-black transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/david-brandon-5108b43b5/"
          className="hover:text-black transition"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
