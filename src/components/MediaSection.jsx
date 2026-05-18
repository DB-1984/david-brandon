export default function MediaSection({ media }) {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto border-t border-gray-100">
      <h2 className="text-3xl font-semibold mb-16">Design & Media</h2>

      <div className="grid md:grid-cols-2 gap-12">
        {media.map((item) => (
          <div key={item.id}>
            <div className="overflow-hidden rounded-xl mb-4 shadow-sm">
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-[4/5] object-cover object-top hover:opacity-90 transition"
              />
            </div>

            <p className="text-xs uppercase tracking-widest text-gray-400">
              {item.category}
            </p>

            <p className="text-sm text-gray-800">{item.title}</p>

            <p className="text-sm text-gray-500 mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
