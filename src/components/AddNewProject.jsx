import NewProjectInput from "./NewProjectInput";

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
      <NewProjectInput inputType="text" labelText="title" />
      <NewProjectInput
        inputType="text"
        labelText="description"
        isTextArea={true}
      />
      <NewProjectInput inputType="date" labelText="due date" />
    </>
  );
}
