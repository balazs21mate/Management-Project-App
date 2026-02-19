import NewProjectButton from "./NewProjectButton";

export default function Projects({ onNewProject, projects }) {
  return (
    <section className="w-1/5 bg-black  lg:mt-20 rounded-tr-3xl pl-14 pt-32">
      <h2 className="text-white uppercase text-3xl font-bold">Your Projects</h2>
      <NewProjectButton onClick={() => onNewProject("NewProject")}>
        + Add Project
      </NewProjectButton>
      <ul>
        {projects.map((project) => (
          <li className="w-4/5" key={project.title}>
            <button
              onClick={() => onNewProject(project.title)}
              className="text-white w-full text-start p-3 mb-1 text-2xl hover:bg-neutral-800 focus:bg-neutral-800"
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
