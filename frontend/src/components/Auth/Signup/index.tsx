"use client";
import React, { useState } from "react";
import InputWithLabel from "../../ui/InputWithLabel";
import { Button } from "../../ui/button";
import { ValidateRegister } from "@/lib/validate";
import Spinner from "../../Loader/Spinner";
import { Signup } from "@/api";
import ButtonWithLoader from "@/components/Buttons/ButtonWithLoader";
import GoogleAuthWrapper from "@/shared/GoogleAuthWrapper";
import Link from "next/link";

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = ValidateRegister(formData);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      setErrors({});
    }
  };

  return (
    <GoogleAuthWrapper>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="w-full  mt-8 mb-2">
          <p className="text-blue-dark text-center font-medium text-base ">
            Or Sign up with email
          </p>
        </div>
        <div className=" w-full space-y-5">
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
          <ButtonWithLoader
            isLoading={status === "Loading"}
            label="Sign up"
            type="submit"
          />
          <div>
            <p className="text-center text-base text-blue-light">
              Already have an account?{" "}
              <Link href="/login">
                <span className="text-blue-dark font-medium">Login</span>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </GoogleAuthWrapper>
  );
};

export default Sign_up;
