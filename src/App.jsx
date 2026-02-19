import { useState } from "react";

import NoProject from "./components/NoProject";
import Projects from "./components/Projects";
import AddNewProject from "./components/AddNewProject";
import Project from "./components/Project";

import Section from "./components/Section";

function App() {
  const [activeSection, setActiveSection] = useState("NoProject");
  const [projects, setProjects] = useState([]);
  const [inputWarning, setInputWarning] = useState("");

  function handleActiveSection(sectionName) {
    setActiveSection(() => sectionName);
    setInputWarning("");
  }

  function handleRefs(title, description, date) {
    if (
      title.current.value.trim() != "" &&
      description.current.value.trim() != "" &&
      date.current.value
    ) {
      for (const project of projects) {
        if (project.title === title.current.value.trim()) {
          return;
        }
      }

      setProjects((prevArray) => [
        ...prevArray,
        {
          title: title.current.value,
          description: description.current.value,
          date: date.current.value,
        },
      ]);

      handleActiveSection("NoProject");
    } else {
      setInputWarning("A mezők kitöltése kötelező!");
    }
  }

  function handleProjectRemove(title) {
    setProjects((prevProjects) => {
      return prevProjects.filter((project) => project.title != title);
    });

    handleActiveSection("NoProject");
  }

  return (
    <main className="flex h-svh">
      <Projects onNewProject={handleActiveSection} projects={projects} />
      {activeSection === "NewProject" && (
        <Section>
          <AddNewProject
            onExitNewProject={() => handleActiveSection("NoProject")}
            onHandleRefs={handleRefs}
            warningText={inputWarning}
          />
        </Section>
      )}
      {activeSection === "NoProject" && (
        <Section>
          <NoProject onNewProject={() => handleActiveSection("NewProject")} />
        </Section>
      )}
      {projects.map(
        (project) =>
          activeSection === project.title && (
            <Section key={project.title}>
              <Project
                title={project.title}
                description={project.description}
                date={project.date}
                onClick={() => handleProjectRemove(project.title)}
              ></Project>
            </Section>
          ),
      )}
    </main>
  );
}

export default App;
