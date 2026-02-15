import { useState } from "react";

import NoProject from "./components/NoProject";
import Projects from "./components/Projects";
import AddNewProject from "./components/AddNewProject";

import Section from "./components/Section";

function App() {
  const [activeSection, setActiveSection] = useState("NoProject");
  const [projects, setProjects] = useState([]);
  const [inputWarning, setInputWarning] = useState({
    title: false,
    description: false,
    date: false,
  });

  function enteredNewProject() {
    setActiveSection(() => "NewProject");
  }

  function exitNewProject() {
    setActiveSection(() => "NoProject");
    setInputWarning({ title: false, description: false, date: false });
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
    } else {
      if (!title.current.value) {
        setInputWarning((prevWarning) => {
          return { ...prevWarning, title: true };
        });
      } else {
        setInputWarning((prevWarning) => {
          return { ...prevWarning, title: false };
        });
      }

      if (!description.current.value) {
        setInputWarning((prevWarning) => {
          return { ...prevWarning, description: true };
        });
      } else {
        setInputWarning((prevWarning) => {
          return { ...prevWarning, description: false };
        });
      }

      if (!date.current.value) {
        setInputWarning((prevWarning) => {
          return { ...prevWarning, date: true };
        });
      } else {
        setInputWarning((prevWarning) => {
          return { ...prevWarning, date: false };
        });
      }
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
            isWarning={inputWarning}
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
