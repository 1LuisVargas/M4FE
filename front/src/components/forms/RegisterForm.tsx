"use client";
import { useFormik } from "formik";
import {
  IRegisterSchema,
  defaultRegisterSchema,
  registerValidationSchema,
} from "@/validators/registerSchema";

const RegisterForm = () => {
  const formik = useFormik<IRegisterSchema>({
    initialValues: defaultRegisterSchema,
    validationSchema: registerValidationSchema,
    onSubmit: () => {
      console.log("Successfully registered");
    },
  });

  return (
    <form
      className="w-1/4 flex flex-col text-center bg-slate-600 p-4 rounded-2xl m-4 items-center"
      onSubmit={formik.handleSubmit}
    >
      <label htmlFor="email">Email</label>
      <input
        className="p-1 mb-4 mt-2 bg-white rounded-2xl"
        id="email"
        type="string"
        name="email"
        required
        autoComplete="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      {formik.errors.email ? <p> {formik.errors.email} </p> : null}
      <label htmlFor="password">Password</label>
      <input
        className="p-1 mb-4 mt-2 bg-white rounded-2xl"
        id="password"
        type="password"
        name="password"
        required
        autoComplete="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      {formik.errors.password ? <p> {formik.errors.password} </p> : null}
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        className="p-1 mb-4 mt-2 bg-white rounded-2xl"
        id="confirmPassword"
        type="password"
        name="confirmPassword"
        required
        autoComplete="password"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
      />
      {formik.errors.confirmPassword ? (
        <p> {formik.errors.confirmPassword} </p>
      ) : null}
      <label htmlFor="name">Name</label>
      <input
        className="p-1 mb-4 mt-2 bg-white rounded-2xl"
        id="name"
        type="string"
        name="name"
        required
        autoComplete="name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      {formik.errors.name ? <p> {formik.errors.name} </p> : null}
      <label htmlFor="address">Address</label>
      <input
        className="p-1 mb-4 mt-2 bg-white rounded-2xl"
        id="address"
        type="string"
        name="address"
        required
        autoComplete="address"
        value={formik.values.address}
        onChange={formik.handleChange}
      />
      {formik.errors.address ? <p> {formik.errors.address} </p> : null}
      <label htmlFor="phone">Phone number</label>
      <input
        className="p-1 mb-4 mt-2 bg-white rounded-2xl"
        id="phone"
        type="string"
        name="phone"
        required
        autoComplete="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
      />
      {formik.errors.phone ? <p> {formik.errors.phone} </p> : null}
      <button
        className="bg-green-500 rounded-2xl w-1/3 m-2 hover:bg-green-700 font-bold"
        type="submit"
        disabled={!formik.isValid || formik.isSubmitting}
      >
        {formik.isSubmitting ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default RegisterForm;
