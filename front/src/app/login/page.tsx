import LoginForm from "@/components/forms/LoginForm";

const login = () => {
    return (
        <div className="flex items-center flex-col">
            <h1 className="font-bold text-3xl m-4 text-center">Login</h1>
            <LoginForm />
        </div>
    );
}

export default login;