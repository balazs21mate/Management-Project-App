import { useState } from "react";

import NoProject from "./components/NoProject";
import Projects from "./components/Projects";
import AddNewProject from "./components/AddNewProject";

import Section from "./components/Section";

function App() {
  const [activeSection, setActiveSection] = useState("NoProject");
  const [projects, setProjects] = useState([]);

  function enteredNewProject() {
    setActiveSection(() => "NewProject");
  }

  function exitNewProject() {
    setActiveSection(() => "NoProject");
  }

  function handleRefs(title, description, date) {
    if (
      title.current.value &&
      description.current.value &&
      date.current.value
    ) {
      setProjects((prevArray) => [
        ...prevArray,
        {
          title: title.current.value,
          description: description.current.value,
          date: date.current.value,
        },
      ]);

      exitNewProject();
    }
  }

  return (
    <main className="flex h-svh">
      <Projects onNewProject={enteredNewProject} projects={projects} />
      {activeSection === "NewProject" && (
        <Section>
          <AddNewProject
            onExitNewProject={exitNewProject}
            onHandleRefs={handleRefs}
          />
        </Section>
      )}
      {activeSection === "NoProject" && (
        <Section>
          <NoProject onNewProject={enteredNewProject} />
        </Section>
      )}
    </main>
  );
}

export default App;
