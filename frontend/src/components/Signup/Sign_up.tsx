import React from "react";
import InputWithLabel from "../ui/InputWithLabel";
import { Button } from "../ui/button";

const Sign_up = () => {
  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <div className=" max-w-2xl w-full space-y-5">
      <InputWithLabel
        label="Full Name"
        type="text"
        value=""
        onChange={handleChanges}
        placeholder="Enter your full name"
        name="full_name"
      />
      <InputWithLabel
        label="Email"
        type="email"
        value=""
        onChange={handleChanges}
        placeholder="Enter your email address"
        name="email"
      />
      <InputWithLabel
        label="Password"
        type="text"
        value=""
        onChange={handleChanges}
        placeholder="Enter your password"
        name="password"
      />
      <InputWithLabel
        label="Password Confirmation"
        type="text"
        value=""
        onChange={handleChanges}
        placeholder="Enter your password again"
        name="password_confirmation"
      />
      <Button className="w-full text-white rounded-xl !mt-8 text-base">
        Sign up
      </Button>
    </div>
  );
};

export default Sign_up;
