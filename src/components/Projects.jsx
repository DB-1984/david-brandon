import ProjectCard from "./ProjectCard";

export default function Projects({ projects, onSelect }) {
  return (
    <section id="work" className="px-6 py-24 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Selected work</h2>

      <div className="grid md:grid-cols-2 mt-16 gap-16">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onSelect={() => onSelect(project)}
          />
        ))}
      </div>
    </section>
  );
}
