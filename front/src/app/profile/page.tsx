import {useAuth} from "@/contexts/AuthContext";

export default function Profile() {
    const {user, isAuthenticated} = useAuth();

    if (!isAuthenticated) return null;
    if (!user) return <p>Loading...</p>;

    return(
        <div className="flex justify-center flex-col items-center">
            <h1 className="h1">Your profile information:</h1>
            <p className="text-xl">
                <span className="font-bold">Name:</span> {user.name}
            </p>
            <p className="text-xl">
                <span className="font-bold">Email:</span> {user.email}
            </p>
            <p className="text-xl">
                <span className="font-bold">Address:</span> {user.address}
            </p>
            <p className="text-xl">
                <span className="font-bold">Phone:</span> {user.phone}
            </p>
        </div>
    )
}