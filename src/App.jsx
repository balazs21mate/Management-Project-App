import { useState } from "react";

import NoProject from "./components/NoProject";
import Projects from "./components/Projects";
import AddNewProject from "./components/AddNewProject";

import Section from "./components/Section";

function App() {
  const [isNewProject, setIsNewProject] = useState(false);

  function handleNewProject() {
    setIsNewProject(() => true);
  }

  return (
    <main className="flex h-svh">
      <Projects onNewProject={handleNewProject} />
      {isNewProject ? (
        <Section>
          <AddNewProject />
        </Section>
      ) : (
        <Section>
          <NoProject onNewProject={handleNewProject} />
        </Section>
      )}
    </main>
  );
}

export default App;
