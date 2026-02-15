import NewProjectInput from "./NewProjectInput";
import { useRef } from "react";

export default function AddNewProject({
  onExitNewProject,
  onHandleRefs,
  isWarning,
}) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  return (
    <>
      <div className="self-end mr-60">
        <button onClick={onExitNewProject}>Cancel</button>
        <button
          onClick={() => onHandleRefs(title, description, date)}
          className="bg-black text-white rounded-lg py-2 px-6 ml-6"
        >
          Save
        </button>
      </div>
      <NewProjectInput
        ref={title}
        isEmpty={isWarning.title}
        inputType="text"
        labelText="title"
      />
      <NewProjectInput
        isEmpty={isWarning.description}
        ref={description}
        inputType="text"
        labelText="description"
        isTextArea={true}
      />
      <NewProjectInput
        ref={date}
        inputType="date"
        labelText="due date"
        isEmpty={isWarning.date}
      />
    </>
  );
}
