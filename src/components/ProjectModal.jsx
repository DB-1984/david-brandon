import { AnimatePresence, motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed top-0 right-0 h-full w-full max-w-xl bg-white z-50 overflow-y-auto shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 28,
              stiffness: 240,
            }}
          >
            <div className="p-8 md:p-12">
              <button
                onClick={onClose}
                className="mb-8 text-sm hover:opacity-60"
              >
                Close
              </button>

              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl mb-8"
              />

              <h2 className="text-4xl font-semibold mb-4">{project.title}</h2>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gray-100 rounded-full text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed">
                {project.longDescription}
              </p>

              <div className="flex gap-4 mt-10">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-black text-white rounded-full text-sm"
                  >
                    Live Project
                  </a>
                )}

                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 border border-black rounded-full text-sm"
                  >
                    Repository
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
