// src/components/Contact.jsx

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Get in touch</h2>

      <p className="text-gray-600 mb-10">
        Have a project in mind, or just want to talk shop? Drop me a message.
      </p>

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

        <button
          type="submit"
          className="px-8 py-4 bg-black text-white rounded-full text-sm"
        >
          Send message
        </button>
      </form>
    </section>
  );
}
