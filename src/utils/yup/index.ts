import * as Yup from "yup";
export const signupValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Confirm Password is required"),
  gender: Yup.string()
    .oneOf(["Male", "Female"], "Invalid gender") // Specify allowed values
    .required("Gender is required"),
});

export const changePasswordValidationSchema = Yup.object({
  currentPassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Current Password is required"),
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), ""], "Passwords must match")
    .required("Confirm Password is required"),
});
