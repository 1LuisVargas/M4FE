"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

type AuthContextValue = {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // Store token in localStorage if there is a token
  const [token, setToken] = useState<string | null>(() =>
    typeof window !== "undefined" ? localStorage.getItem("token") : null
  );
  const pathname = usePathname();

  // Keep state in sync with localStorage changes from other tabs
  useEffect(() => {
    const onStorage = () => setToken(localStorage.getItem("token"));
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // Re-check on route changes
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [pathname]);

  const login = (t: string) => {
    localStorage.setItem("token", t);
    setToken(t); // Immediate same-tab update
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  // Create value
  const value = useMemo<AuthContextValue>(
    () => ({ isAuthenticated: !!token, token, login, logout }),
    [token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom Hook to use the context
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}
