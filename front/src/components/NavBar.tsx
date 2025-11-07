"use client";

import Link from "next/link";
import NavItems from "@/helpers/NavBarItems";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const logoutHandler = () => {
    logout();
    router.push("/login");
  };

  return (
    <nav className="p-4 bg-slate-600">
      <ul className="flex gap-4">
        <li className="font-bold">
          <Link href={NavItems.HOME}>Home</Link>
        </li>
        <li className="font-bold">
          <Link href={NavItems.ORDERS}>Order History</Link>
        </li>
        {isAuthenticated ? (
          <>
            <li className="font-bold">
              <Link href={NavItems.CART}>Cart</Link>
            </li>
            <li className="font-bold">
              {" "}
              <Link href={NavItems.PROFILE}>Profile</Link>
            </li>
            <li className="font-bold">
              <button
                onClick={logoutHandler}
                className="font-bold hover:underline cursor-pointer"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li className="font-bold hover:underline">
            <Link href={NavItems.LOGIN}>Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
