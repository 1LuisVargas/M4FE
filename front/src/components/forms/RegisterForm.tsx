"use client";
import { useFormik } from "formik";
import {
  IRegisterSchema,
  defaultRegisterSchema,
  registerValidationSchema,
} from "@/validators/registerSchema";
import { useRouter } from "next/navigation";
import { registerUserService } from "@/services/auth.services";

const RegisterForm = () => {
  const router = useRouter();

  const formik = useFormik<IRegisterSchema>({
    initialValues: defaultRegisterSchema,
    validationSchema: registerValidationSchema,
    onSubmit: async () => {
      try {
        await registerUserService(formik.values);
        alert("User registered successfully!");
        router.push("/login");
      } catch (error) {
        alert(`${error}`);
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
        id="email"
        type="string"
        name="email"
        required
        autoComplete="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      {formik.errors.email ? (
        <p className="text-red-500"> {formik.errors.email} </p>
      ) : null}
      <label className="formLabel" htmlFor="password">
        Password
      </label>
      <input
        className="formInput"
        id="password"
        type="password"
        name="password"
        required
        autoComplete="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      {formik.errors.password ? (
        <p className="text-red-500"> {formik.errors.password} </p>
      ) : null}
      <label className="formLabel" htmlFor="confirmPassword">
        Confirm Password
      </label>
      <input
        className="formInput"
        id="confirmPassword"
        type="password"
        name="confirmPassword"
        required
        autoComplete="password"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
      />
      {formik.errors.confirmPassword ? (
        <p className="text-red-500"> {formik.errors.confirmPassword} </p>
      ) : null}
      <label className="formLabel" htmlFor="name">
        Name
      </label>
      <input
        className="formInput"
        id="name"
        type="string"
        name="name"
        required
        autoComplete="name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      {formik.errors.name ? (
        <p className="text-red-500"> {formik.errors.name} </p>
      ) : null}
      <label className="formLabel" htmlFor="address">
        Address
      </label>
      <input
        className="formInput"
        id="address"
        type="string"
        name="address"
        required
        autoComplete="address"
        value={formik.values.address}
        onChange={formik.handleChange}
      />
      {formik.errors.address ? (
        <p className="text-red-500"> {formik.errors.address} </p>
      ) : null}
      <label className="formLabel" htmlFor="phone">
        Phone number
      </label>
      <input
        className="formInput"
        id="phone"
        type="string"
        name="phone"
        required
        autoComplete="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
      />
      {formik.errors.phone ? (
        <p className="text-red-500"> {formik.errors.phone} </p>
      ) : null}
      <button
        className="formButton"
        type="submit"
        disabled={!formik.isValid || formik.isSubmitting}
      >
        {formik.isSubmitting ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default RegisterForm;
