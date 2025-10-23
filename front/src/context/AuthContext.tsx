"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export type User = {
  id: number;
  email: string;
  name: string;
  address: string;
  phone: string;
};

type AuthContextValue = {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
  login: (token: string, user: User) => void;
  updateUser: (patch: Partial<User>) => void;
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

  // Store token and user in localStorage if there is a token
  const [token, setToken] = useState<string | null>(() =>
    typeof window !== "undefined" ? localStorage.getItem(TOKEN_KEY) : null
  );
  const [user, setUser] = useState<User | null>(() =>
    typeof window !== "undefined"
      ? safeParse<User>(localStorage.getItem(USER_KEY))
      : null
  );

  // Keep state in sync with localStorage changes from other tabs
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === TOKEN_KEY) setToken(e.newValue);
      if (e.key === USER_KEY) setUser(safeParse<User>(e.newValue));
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
    setUser(safeParse<User>(localStorage.getItem(USER_KEY)));
  }, [pathname]);
  
  const login = (t: string, u: User) => {
    localStorage.setItem(TOKEN_KEY, t);
    localStorage.setItem(USER_KEY, JSON.stringify(u));
    setToken(t);
    setUser(u);
  };

  const updateUser = (patch: Partial<User>) => {
    setUser((prev) => {
      const next = { ...(prev ?? ({} as User)), ...patch } as User; //Copying and patching to update user
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
