import * as Yup from "yup";

export interface ILoginSchema {
  email: string;
  password: string;
}

export const defaultLoginSchema: ILoginSchema = {
  email: "",
  password: "",
};

export const loginValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(12, "Password must be at least 12 characters")
    .required("Password is required"),
});
