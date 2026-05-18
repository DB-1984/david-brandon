export default function ProjectCard({ project, onSelect }) {
  const { title, description, image } = project;

  return (
    <button onClick={onSelect} className="group text-left block">
      <div className="overflow-hidden rounded-xl mb-4 bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full object-cover group-hover:scale-105 -mt-1 transition duration-700"
        />
      </div>

      <h3 className="text-xl font-medium">{title}</h3>

      <p className="text-sm text-gray-500 mt-1">{description}</p>
    </button>
  );
}
