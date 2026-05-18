import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";

import { projects } from "./data/projects";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="overflow-hidden font-['Inter'] text-black">
      <Header />

      <Hero />

      <Projects
        projects={projects}
        onSelect={(project) => setSelectedProject(project)}
      />

      <Contact />

      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
