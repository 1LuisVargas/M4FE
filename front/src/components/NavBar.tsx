"use client";

import Link from "next/link";
import NavItems from "@/helpers/NavBarItems";
import { useAuth } from "@/context/AuthContext";

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="p-4 bg-slate-600">
      <ul className="flex gap-4">
        <li className="font-bold">
          <Link href={NavItems.HOME}>Home</Link>
        </li>
        <li className="font-bold">
          <Link href={NavItems.DASHBOARD}>Dashboard</Link>
        </li>
        <li className="font-bold">
          <Link href={NavItems.CART}>Cart</Link>
        </li>
        {isAuthenticated ? (
          <ul className="flex gap-4">
            <li className="font-bold">
              {" "}
              <Link href={NavItems.DASHBOARD}>Profile</Link>
            </li>
            <li className="font-bold">
              <Link href={NavItems.HOME} onClick={logout}>Logout</Link>
            </li>
          </ul>
        ) : (
          <li className="font-bold">
            <Link href={NavItems.LOGIN}>Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
