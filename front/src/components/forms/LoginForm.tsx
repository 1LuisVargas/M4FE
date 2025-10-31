"use client";

import {
  ILoginSchema,
  loginValidationSchema,
  defaultLoginSchema,
} from "@/validators/loginSchema";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import IUser from "@/interfaces/IUser";
import { loginUserService } from "@/services/auth.services";

type AuthResponse = {
  token: string;
  user: IUser;
};

const LoginForm = () => {
  const router = useRouter();
  const { login } = useAuth();

  const formik = useFormik<ILoginSchema>({
    initialValues: defaultLoginSchema,
    validationSchema: loginValidationSchema,
    onSubmit: async () => {
      try {
        await loginUserService(formik.values).then((response: AuthResponse) => {
          login(response.token, response.user);
          alert("User logged in successfully!");
          router.push("/");
        })
      } catch (error) {
        alert(`${error}`);
        console.error(error);
      }
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <label className="formLabel" htmlFor="email">
        Email
      </label>
      <input
        className="formInput"
        type="email"
        name="email"
        id="email"
        required
        autoComplete="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      {formik.errors.email ? (
        <p className="text-red-500 mb-4">{formik.errors.email}</p>
      ) : null}
      <label className="formLabel" htmlFor="password">
        Password
      </label>
      <input
        className="formInput"
        type="password"
        name="password"
        id="password"
        required
        autoComplete="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      {formik.errors.password ? (
        <p className="text-red-500">{formik.errors.password}</p>
      ) : null}
      <button
        className="formButton"
        type="submit"
        disabled={formik.isSubmitting || !formik.isValid}
      >
        {formik.isSubmitting ? "Logging in..." : "Submit"}
      </button>
    </form>
  );
};

export default LoginForm;
