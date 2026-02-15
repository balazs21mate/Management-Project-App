import { forwardRef, useState } from "react";

const NewProjectInput = forwardRef(
  ({ inputType, labelText, isTextArea }, ref) => {
    const [inputValue, setInputValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    function handleInputValue(event) {
      setInputValue(event.target.value);
      if (!isTouched) setIsTouched(true);
    }

    let inputClass = "bg-stone-300 mr-60 ml-20 px-2 py-3 focus:outline-none";

    if (inputValue.trim() === "" && isTouched) {
      inputClass += " border-2 border-red-400";
    } else {
      inputClass +=
        " border-b-2 border-stone-400 hover:border-stone-600 focus:border-stone-600";
    }

    return (
      <div className="flex flex-col w-full text-stone-600 my-3">
        <label className="uppercase ml-20 mb-1 font-bold">{labelText}</label>
        {isTextArea ? (
          <textarea
            ref={ref}
            name="input"
            className={inputClass}
            onChange={handleInputValue}
            value={inputValue}
          />
        ) : (
          <input
            ref={ref}
            type={inputType}
            name="input"
            className={inputClass}
            onChange={handleInputValue}
            value={inputValue}
          />
        )}
      </div>
    );
  },
);

export default NewProjectInput;
