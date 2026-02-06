import { useState } from "react";

import NoProject from "./components/NoProject";
import Projects from "./components/Projects";
import AddNewProject from "./components/AddNewProject";

import Section from "./components/Section";

function App() {
  const [activeSection, setActiveSection] = useState("NoProject");

  function enteredNewProject() {
    setActiveSection(() => "NewProject");
  }

  function exitNewProject() {
    setActiveSection(() => "NoProject");
  }

  return (
    <main className="flex h-svh">
      <Projects onNewProject={enteredNewProject} />
      {activeSection === "NewProject" && (
        <Section>
          <AddNewProject onExitNewProject={exitNewProject} />
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
