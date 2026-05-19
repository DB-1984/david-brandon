import {
  siReact,
  siNextdotjs,
  siDjango,
  siNodedotjs,
  siPostgresql,
  siTailwindcss,
  siWordpress,
  siMongodb
} from "simple-icons";

const stack = [
  { name: "React", icon: siReact },
  { name: "Next.js", icon: siNextdotjs },
  { name: "Django", icon: siDjango },
  { name: "Node", icon: siNodedotjs },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "Tailwind", icon: siTailwindcss },
  { name: "WordPress", icon: siWordpress },
  { name: "MongoDB", icon: siMongodb }
];

export default function StackRow() {
  return (
    <div className="mt-10 flex flex-wrap gap-6 text-black/70">
      {stack.map((item) => (
        <div key={item.name} className="flex items-center gap-2">
          <svg
            role="img"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
            dangerouslySetInnerHTML={{ __html: item.icon.svg }}
          />
          <span className="text-xs">{item.name}</span>
        </div>
      ))}
    </div>
  );
}