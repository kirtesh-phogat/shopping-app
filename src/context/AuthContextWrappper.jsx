import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthContextWrappper = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(() => {
    const stored = localStorage.getItem("isLoggedIn");
    return stored ? JSON.parse(stored) : false;
  });

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // ✅ Sync login state
  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  // ✅ Sync user
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // 🔥 FINAL LOGIN (CORRECT)
  const login = (formData) => {
    const users = JSON.parse(localStorage.getItem("userData")) || [];

    const matchedUser = users.find(
      (u) =>
        u.email === formData.email &&
        u.password === formData.password
    );

    if (matchedUser) {
      setUser(matchedUser); // ✅ FULL USER
      setLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  // ✅ LOGOUT
  const logout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextWrappper;
export { AuthContext };