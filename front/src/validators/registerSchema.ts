import * as Yup from "yup";

export interface IRegisterSchema {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  address: string;
  phone: string;
}

export const defaultRegisterSchema: IRegisterSchema = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  address: "",
  phone: "",
};

export const registerValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(12, "Password must be at least 12 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirming the password is required"),
  address: Yup.string().required("Address is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
});
