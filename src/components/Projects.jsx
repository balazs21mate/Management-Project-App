export default function Projects({ onNewProject }) {
  return (
    <section className="w-1/5 bg-black  mt-20 rounded-tr-3xl pl-14 pt-32">
      <h2 className="text-white uppercase text-3xl font-bold">Your Projects</h2>
      <button
        onClick={onNewProject}
        className="bg-gray-600 text-gray-400 text-xl rounded-lg py-3 px-5 mt-14"
      >
        + Add Project
      </button>
    </section>
  );
}
