import LoginForm from "@/components/forms/LoginForm";

const login = () => {
    return (
        <div className="flex items-center flex-col">
            <h1 className="font-bold text-3xl m-4 text-center">Login</h1>
            <LoginForm />
            <p className="m-3">If you don&apos;t have an account, you can register <a className="font-bold" href="/register">here</a>.</p>
        </div>
    );
}

export default login;