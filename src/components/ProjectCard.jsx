import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function ProjectCard({ project, onSelect }) {
  const { title, description, image } = project;

  return (
    <motion.button
      onClick={onSelect}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group text-left block relative"
    >
      {/* IMAGE WRAPPER */}
      <div className="relative overflow-hidden rounded-xl shadow-xl mb-4 bg-gray-100">
        
        {/* PLUS ICON */}
        <div className="absolute top-3 right-3 z-10">
          <div className="p-2 rounded-full bg-black/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-300">
            <Plus size={16} className="text-white" />
          </div>
        </div>

        <img
          src={image}
          alt={title}
          className="w-full object-cover group-hover:blur-xs group-hover:scale-105 -mt-1 transition duration-700"
        />
      </div>

      <h3 className="text-xl font-black">{title}</h3>

      <p className="text-sm text-black/80 mt-1">{description}</p>
    </motion.button>
  );
}