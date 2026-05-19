import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MediaSection from "./components/MediaSection";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";
import { media } from "./data/media";
import { projects } from "./data/projects";
import Background from "./components/Background";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div className="overflow-hidden font-['Inter'] text-black">
        <Hero />

        <Projects
          projects={projects}
          onSelect={(project) => setSelectedProject(project)}
        />

        <MediaSection media={media} />

        <Contact />

        <Footer />

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </>
  );
}
