"use client";

import Link from "next/link";
import NavItems from "@/helpers/NavBarItems";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const readToken = () => setIsAuthenticated(!!localStorage.getItem("token"));
    readToken();
    window.addEventListener("storage", readToken);
    const onAuthChange = () => readToken();
    window.addEventListener("onAuthChange", onAuthChange);

    return () => {
      window.removeEventListener("storage", readToken);
      window.removeEventListener("onAuthChange", onAuthChange);
    };
  }, [pathname]);

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
          <li className="font-bold">
            <button
              onClick={() => {
                localStorage.removeItem("token");
                setIsAuthenticated(false);
                window.dispatchEvent(new Event("onAuthChange"));
                router.push("/");
              }}
            >
              Logout
            </button>
          </li>
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
