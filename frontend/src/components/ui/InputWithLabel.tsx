import React, { type FC } from "react";
import { Label } from "./label";
import { Input } from "./input";
import clsx from "clsx";

interface InputWithLabelProps {
  label: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  name: string;
  optional?: boolean;
}

const InputWithLabel: FC<InputWithLabelProps> = ({
  label,
  type,
  onChange,
  value,
  placeholder,
  className,
  name,
  optional = false,
}) => {
  return (
    <div>
      <Label className="text-blue-dark pl-1 font-semibold text-base">
        {label} {!optional && <span className="text-red-500">*</span>}
      </Label>
      <Input
        type={type}
        onChange={onChange}
        name={name}
        value={value}
        placeholder={placeholder}
        className={clsx(
          "rounded-xl placeholder:text-gray mt-2 focus-within:border-neutral-500 duration-200 ease-linear transition-colors outline-none font-normal tracking-wide text-base",
          className
        )}
      />
    </div>
  );
};

export default InputWithLabel;
