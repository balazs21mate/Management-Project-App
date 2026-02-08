export default function NewProjectButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="bg-stone-600 text-gray-400 text-xl rounded-lg py-3 px-5 my-14"
    >
      {children}
    </button>
  );
}
