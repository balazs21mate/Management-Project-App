export default function Project({ title, description, date }) {
  return (
    <>
      <div className="w-full flex justify-between">
        <h1>{title}</h1>
        <button>delete</button>
      </div>
      <p>{description}</p>
    </>
  );
}
