import React, { FC } from "react";
import { Button } from "../ui/button";
import Spinner from "../Loader/Spinner";
import clsx from "clsx";

interface ISubmitButton {
  isLoading: boolean;
  label: string;
  className?: string;
  type?: "submit" | "button";
}

const ButtonWithLoader: FC<ISubmitButton> = ({
  isLoading,
  label,
  className,
  type = "button",
}) => {
  return (
    <Button
      disabled={isLoading}
      type={type}
      className={clsx(
        "w-full text-white rounded-xl !mt-8 text-base",
        className
      )}
    >
      {label}
      {isLoading && <Spinner className="size-7 mx-3" />}
    </Button>
  );
};

export default ButtonWithLoader;
