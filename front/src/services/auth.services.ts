const loginUserService = async (credentials: {
    email: string;
    password: string;
}) => {
    try {
        const response = await fetch("http://localhost:3005/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error logging in: ${error}`);
    }
};

export default loginUserService;