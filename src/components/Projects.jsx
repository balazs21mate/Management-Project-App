import NewProjectButton from "./NewProjectButton";

export default function Projects({ onNewProject }) {
  return (
    <section className="w-1/5 bg-black  lg:mt-20 rounded-tr-3xl pl-14 pt-32">
      <h2 className="text-white uppercase text-3xl font-bold">Your Projects</h2>
      <NewProjectButton onClick={onNewProject}>+ Add Project</NewProjectButton>
    </section>
  );
}
