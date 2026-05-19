import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function MediaSection({ media }) {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto border-t border-gray-100">
      <h2 className="text-3xl font-semibold mb-16">Design & Media</h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 gap-12"
      >
        {media.map((itemData) => (
          <motion.div
            key={itemData.id}
            variants={item}
            whileHover={{ y: -6 }}
            className="cursor-pointer"
          >
            <div className="overflow-hidden rounded-xl mb-4 shadow-sm">
              <motion.img
                src={itemData.image}
                alt={itemData.title}
                className="w-full aspect-[4/5] object-cover object-top"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <p className="text-xs uppercase tracking-widest text-gray-400">
              {itemData.category}
            </p>

            <p className="text-sm text-gray-800">{itemData.title}</p>

            <p className="text-sm text-gray-500 mt-1">
              {itemData.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}