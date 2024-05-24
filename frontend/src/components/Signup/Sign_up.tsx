import React, { useState } from "react";
import InputWithLabel from "../ui/InputWithLabel";
import { Button } from "../ui/button";
import { ValidateRegister } from "@/libs/helper";

const Sign_up = () => {
  const [formData, setFormData] = useState<ISigupForm>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<ISigupFormErrors>({});
  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("submit");
    event.preventDefault();
    const errors = ValidateRegister(formData);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      setErrors({});
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className=" max-w-2xl w-full space-y-5">
        <InputWithLabel
          label="Full Name"
          type="text"
          value=""
          onChange={handleChanges}
          placeholder="Enter your full name"
          name="full_name"
          validate={errors.fullName}
        />
        <InputWithLabel
          label="Email"
          type="email"
          value=""
          onChange={handleChanges}
          placeholder="Enter your email address"
          name="email"
          validate={errors.email}
        />
        <InputWithLabel
          label="Password"
          type="text"
          value=""
          onChange={handleChanges}
          placeholder="Enter your password"
          name="password"
          validate={errors.password}
        />
        <InputWithLabel
          label="Password Confirmation"
          type="text"
          value=""
          onChange={handleChanges}
          placeholder="Enter your password again"
          name="password_confirmation"
          validate={errors.confirmPassword}
        />
        <Button
          type="submit"
          className="w-full text-white rounded-xl !mt-8 text-base"
        >
          Sign up
        </Button>
      </div>
    </form>
  );
};

export default Sign_up;
