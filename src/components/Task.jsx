export default function Task({ task }) {
  return (
    <div className="flex justify-between my-6">
      <p>{task}</p>
      <button>Clear</button>
    </div>
  );
}
