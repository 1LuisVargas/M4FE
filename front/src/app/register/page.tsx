import RegisterForm from "@/components/forms/RegisterForm";

const register = () => {
  return (
    <div className="flex items-center flex-col">
      <h1 className="h1">
        Register to our store
      </h1>
      <RegisterForm />
      <p className="m-3">If you already have an account, you can login <a className="font-bold" href="/login">here</a>.</p>
    </div>
  );
};

export default register;
