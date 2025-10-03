"use client";

import {
  ILoginSchema,
  loginValidationSchema,
  defaultLoginSchema,
} from "@/validators/loginSchema";
import { useFormik } from "formik";

const LoginForm = () => {
  const formik = useFormik<ILoginSchema>({
    initialValues: defaultLoginSchema,
    validationSchema: loginValidationSchema,
    onSubmit: () => {
      console.log("Successful login");
    },
  });

  return (
    <form
      className="w-1/4 flex flex-col text-center bg-slate-600 p-4 rounded-2xl m-4 items-center"
      onSubmit={formik.handleSubmit}
    >
      <label className="text-white font-bold" htmlFor="email">
        Email
      </label>
      <input
        className="p-1 mb-4 mt-2 bg-white rounded-2xl"
        type="email"
        name="email"
        id="email"
        required
        autoComplete="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      {formik.errors.email ? (
        <p className="text-red-500">{formik.errors.email}</p>
      ) : null}
      <label className="text-white font-bold" htmlFor="password">
        Password
      </label>
      <input
        className="p-1 mb-4 mt-2 bg-white rounded-2xl"
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
        className="bg-green-500 rounded-2xl w-1/3 m-2 hover:bg-green-700 font-bold"
        type="submit"
        disabled={formik.isSubmitting || !formik.isValid}
      >
        {formik.isSubmitting ? "Logging in..." : "Submit"}
      </button>
    </form>
  );
};

export default LoginForm;
