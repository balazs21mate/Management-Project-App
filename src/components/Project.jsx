import TaskInput from "./TaskInput";
import TaskLog from "./TaskLog";

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-Us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Project({ title, description, date, ...props }) {
  return (
    <>
      <div className="w-full flex justify-between">
        <h1 className="text-4xl font-bold">{title}</h1>
        <button {...props}>Delete</button>
      </div>
      <time className="self-start text-stone-400 mt-3 mb-4">
        {formatDate(date)}
      </time>
      <p className="self-start border-b-4 border-stone-200 pb-4 w-full">
        {description}
      </p>
      <TaskInput />
      <TaskLog />
    </>
  );
}
