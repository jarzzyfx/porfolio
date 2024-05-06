import { FC } from "react";

interface Inputprops {
  label: string;
  inpType: string;
  holder?: string;
  value: string;
  onChange?: (val: any) => void;
}

export const Input: FC<Inputprops> = ({
  onChange,
  value,
  label,
  inpType,
  holder,
}) => {
  return (
    <div className="group flex flex-col max-w-[80%] p-1 gap-2">
      <label className="group text-sm capitalize" htmlFor="">
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        className="ring-1 p-2 rounded-md focus:text-indigo-700 text-lg outline-none border-none"
        type={inpType}
        placeholder={holder}
      />
    </div>
  );
};
