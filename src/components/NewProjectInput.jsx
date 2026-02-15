import { forwardRef, useState } from "react";

const NewProjectInput = forwardRef(
  ({ inputType, labelText, isTextArea }, ref) => {
    const [inputValue, setInputValue] = useState();

    function handleInputValue(event) {
      setInputValue(event.target.value);
    }

    let inputClass;

    if (inputValue != undefined && !inputValue) {
      inputClass =
        "bg-stone-300 border-4 border-red-400 mr-60 focus:outline-none ml-20 px-2 py-3";
    } else {
      inputClass =
        "bg-stone-300 border-b-2 border-stone-400 hover:border-stone-600 mr-60 focus:border-stone-600 focus:outline-none ml-20 px-2 py-3";
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
