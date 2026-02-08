import NewProjectInput from "./NewProjectInput";
import { useRef } from "react";

export default function AddNewProject({ onExitNewProject }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function handleRefs() {
    console.log(title.current.value);
    console.log(description.current.value);
    console.log(date.current.value);

    onExitNewProject();
  }

  return (
    <>
      <div className="self-end mr-60">
        <button onClick={onExitNewProject}>Cancel</button>
        <button
          onClick={handleRefs}
          className="bg-black text-white rounded-lg py-2 px-6 ml-6"
        >
          Save
        </button>
      </div>
      <NewProjectInput ref={title} inputType="text" labelText="title" />
      <NewProjectInput
        ref={description}
        inputType="text"
        labelText="description"
        isTextArea={true}
      />
      <NewProjectInput ref={date} inputType="date" labelText="due date" />
    </>
  );
}
