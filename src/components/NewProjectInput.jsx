export default function NewProjectInput({ inputType, labelText, isTextArea }) {
  return (
    <div className="flex flex-col w-full text-stone-600 my-3">
      <label className="uppercase ml-20 mb-1 font-bold">{labelText}</label>
      {isTextArea ? (
        <textarea
          name="input"
          className="bg-stone-300 border-b-2 border-stone-400 hover:border-stone-600 mr-60 focus:border-stone-600 focus:outline-none ml-20 px-2 py-3"
        />
      ) : (
        <input
          type={inputType}
          name="input"
          className="bg-stone-300 border-b-2 border-stone-400 hover:border-stone-600 mr-60 focus:border-stone-600 focus:outline-none ml-20 px-2 py-3"
        />
      )}
    </div>
  );
}
