import RegisterForm from "@/components/forms/RegisterForm";

const register = () => {
  return (
    <div className="flex items-center flex-col">
      <h1 className="font-bold text-3xl m-4 text-center">
        Register to our store
      </h1>
      <RegisterForm />
    </div>
  );
};

export default register;
