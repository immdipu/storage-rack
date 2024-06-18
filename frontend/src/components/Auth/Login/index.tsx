"use client";
import React, { useState } from "react";
import GoogleAuthWrapper from "@/shared/GoogleAuthWrapper";
import { ValidateLogin } from "@/lib/validate";
import InputWithLabel from "@/components/ui/InputWithLabel";
import Link from "next/link";
import ButtonWithLoader from "@/components/Buttons/ButtonWithLoader";

const Login = () => {
  const [formData, setFormData] = useState<ILoginForm>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<ILoginFormErrors>({});

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = ValidateLogin(formData);
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

          <ButtonWithLoader isLoading={true} label="Log in" type="submit" />
          <div>
            <p className="text-center text-base text-blue-light">
              Don&apos;t have an account?{" "}
              <Link href="/signup">
                <span className="text-blue-dark font-medium">Sign up here</span>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </GoogleAuthWrapper>
  );
};

export default Login;
