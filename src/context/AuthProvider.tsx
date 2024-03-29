import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const login = (email: string, password: string) =>
  supabase.auth.signInWithPassword({ email, password });

const signOut = () => supabase.auth.signOut();

const passwordReset = (email: string) =>
  supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:5173/update-password"
  });

const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event == "PASSWORD_RECOVERY") {
        setAuth(false);
      } else if (event === "SIGNED_IN") {
        setUser(session?.user);
        setSession(session);
        setAuth(true);
      } else if (event === "SIGNED_OUT") {
        setAuth(false);
        setUser(null);
      }
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ auth, user, session, login, signOut, passwordReset }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
