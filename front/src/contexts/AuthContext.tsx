"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import IUser from "@/interfaces/IUser";

type AuthContextValue = {
  isAuthenticated: boolean;
  token: string | null;
  user: IUser | null;
  login: (token: string, user: IUser) => void;
  updateUser: (patch: Partial<IUser>) => void;
  logout: () => void;
};

const TOKEN_KEY = "token";
const USER_KEY = "user";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function safeParse<T>(raw: string | null): T | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Get the token and user from localStorage if there is a token
  const [token, setToken] = useState<string | null>(() =>
    typeof window !== "undefined" ? localStorage.getItem(TOKEN_KEY) : null
  );
  const [user, setUser] = useState<IUser | null>(() =>
    typeof window !== "undefined"
      ? safeParse<IUser>(localStorage.getItem(USER_KEY))
      : null
  );

  // Keep state in sync with localStorage changes from other tabs
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === TOKEN_KEY) setToken(e.newValue);
      if (e.key === USER_KEY) setUser(safeParse<IUser>(e.newValue));
      if (e.key === null) {
        //Only acting when localstorage is fully cleared
        setToken(null);
        setUser(null);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // Re-check on route changes
  useEffect(() => {
    setToken(localStorage.getItem(TOKEN_KEY));
    setUser(safeParse<IUser>(localStorage.getItem(USER_KEY)));
  }, [pathname]);

  // Setting the token and user in localStorage
  const login = (t: string, u: IUser) => {
    localStorage.setItem(TOKEN_KEY, t);
    localStorage.setItem(USER_KEY, JSON.stringify(u));
    setToken(t);
    setUser(u);
  };

  const updateUser = (patch: Partial<IUser>) => {
    setUser((prev) => {
      const next = { ...(prev ?? ({} as IUser)), ...patch } as IUser; //Copying and patching to update IIUser
      localStorage.setItem(USER_KEY, JSON.stringify(next));
      return next;
    });
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    setToken(null);
    setUser(null);
  };

  // Create value
  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated: !!token,
      token,
      user,
      login,
      updateUser,
      logout,
    }),
    [token, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom Hook to use the context
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}
