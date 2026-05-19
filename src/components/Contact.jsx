import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="relative overflow-hidden mb-4 ">
      <section
        id="contact"
        className="p-6 md:p-12 my-16 bg-white/80 mx-8 rounded-xl md:max-w-3xl md:mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-6"
        >
          Get in touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-10"
        >
          Have a project in mind, or just want to talk shop? Drop me a message.
        </motion.p>

        <form
          action="https://formspree.io/f/xdalddke"
          method="POST"
          className="space-y-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full border-b border-gray-300 py-3 outline-none bg-transparent"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full border-b border-gray-300 py-3 outline-none bg-transparent"
            />
          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            required
            className="w-full border-b border-gray-300 py-3 outline-none bg-transparent resize-none"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-black text-white rounded-full text-sm"
          >
            Send message
          </motion.button>
        </form>
      </section>
    </div>
  );
}
