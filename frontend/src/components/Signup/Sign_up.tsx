import React, { useState } from "react";
import InputWithLabel from "../ui/InputWithLabel";
import { Button } from "../ui/button";
import { ValidateRegister } from "@/libs/helper";

interface ISigupForm {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ISigupFormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

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
    event.preventDefault();
    const errors = ValidateRegister(formData);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      setErrors({});
      // Submit the form or handle successful validation here
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="max-w-2xl w-full space-y-5">
        <InputWithLabel
          label="Full Name"
          type="text"
          value={formData.fullName}
          onChange={handleChanges}
          placeholder="Enter your full name"
          name="fullName"
          validate={errors.fullName}
        />
        <InputWithLabel
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChanges}
          placeholder="Enter your email address"
          name="email"
          validate={errors.email}
        />
        <InputWithLabel
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChanges}
          placeholder="Enter your password"
          name="password"
          validate={errors.password}
        />
        <InputWithLabel
          label="Password Confirmation"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChanges}
          placeholder="Enter your password again"
          name="confirmPassword"
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
