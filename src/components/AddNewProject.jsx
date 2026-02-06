export default function AddNewProject({ onExitNewProject }) {
  return (
    <>
      <div className="self-end mr-60">
        <button onClick={onExitNewProject}>Cancel</button>
        <button
          onClick={onExitNewProject}
          className="bg-black text-white rounded-lg py-2 px-6 ml-6"
        >
          Save
        </button>
      </div>
    </>
  );
}
