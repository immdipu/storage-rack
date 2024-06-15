import React, { type FC } from "react";
import { Label } from "./label";
import { Input } from "./input";

interface InputWithLabelProps {
  label: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWithLabel: FC<InputWithLabelProps> = ({
  label,
  type,
  onChange,
  value,
}) => {
  return (
    <div>
      <Label></Label>
      <Input />
    </div>
  );
};

export default InputWithLabel;
