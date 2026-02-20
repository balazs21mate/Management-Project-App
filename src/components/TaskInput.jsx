export default function TaskInput(params) {
  return (
    <div className="flex self-start w-2/5">
      <div className="flex flex-col w-full">
        <label className="text-3xl font-bold my-4" htmlFor="task">
          Tasks
        </label>
        <input className="bg-stone-300  px-2 py-3 " type="text" id="task" />
      </div>
      <button className="w-24 h-12 self-end text-sm font-semibold">
        Add Task
      </button>
    </div>
  );
}
