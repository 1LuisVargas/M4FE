import RegisterForm from "@/components/forms/RegisterForm";

const register = () => {
  return (
    <div className="flex items-center flex-col">
      <h1 className="h1">
        Register to our store
      </h1>
      <RegisterForm />
    </div>
  );
};

export default register;
