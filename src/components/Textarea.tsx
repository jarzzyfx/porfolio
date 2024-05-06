import { FC } from "react";

interface Textareaprops {
  label: string;
  holder?: string;
  value: string;
  onChange?: (val: any) => void;
}

export const Textarea: FC<Textareaprops> = ({
  onChange,
  value,
  label,
  holder,
}) => {
  return (
    <div className="group flex flex-col max-w-[80%] p-1 gap-2">
      <label className="group text-sm capitalize" htmlFor="">
        {label}
      </label>
      <textarea
        onChange={onChange}
        value={value}
        name=""
        id=""
        placeholder={holder}
        className="ring-1 p-2 resize-none rounded-md focus:text-indigo-700 text-sm outline-none border-none"
      >
        {" "}
      </textarea>
    </div>
  );
};
