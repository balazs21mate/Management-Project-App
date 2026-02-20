import Task from "./Task";

export default function TaskLog({ tasks }) {
  return (
    <div className="w-full justify-between px-4 py-8 mt-10 bg-stone-100">
      {tasks.map((task) => (
        <Task key={task.id} task={task.task} />
      ))}
    </div>
  );
}
