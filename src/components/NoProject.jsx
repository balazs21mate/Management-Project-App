export default function NoProject({ onNewProject }) {
  return (
    <>
      <img src="logo.png" alt="logo" className="w-24 h-24" />
      <h2 className="text-stone-600 text-3xl font-bold my-10">
        No Project Selected
      </h2>
      <h3 className="text-gray-400 text-2xl">
        Select a project or get started with a new one
      </h3>
      <button
        onClick={onNewProject}
        className="bg-stone-600 text-gray-400 text-xl rounded-lg py-3 px-5 mt-14"
      >
        Create new project
      </button>
    </>
  );
}
