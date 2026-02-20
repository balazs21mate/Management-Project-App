export default function Task({ task, ...props }) {
  return (
    <div className="flex justify-between my-6">
      <p>{task}</p>
      <button {...props} className="hover:text-red-400">
        Clear
      </button>
    </div>
  );
}
