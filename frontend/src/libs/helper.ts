export const ValidateRegister = (values: ISigupForm): ISigupFormErrors => {
  const errors: ISigupFormErrors = {};

  if (!values.fullName) {
    errors.fullName = "FullName is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required";
  }
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }
  return errors;
};

export const ValidateLogin = (values: ILoginForm): ILoginFormErrors => {
  const errors: ILoginFormErrors = {};

  if (!values.email) {
    errors.email = "email is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
};
