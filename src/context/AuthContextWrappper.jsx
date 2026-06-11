import { createContext, useState } from "react";

const AuthContext = createContext();

const readStoredUser = () => {
  try {
    const storedUser =
      localStorage.getItem("user") || sessionStorage.getItem("user");

    return storedUser ? JSON.parse(storedUser) : null;
  } catch {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    return null;
  }
};

const readRegisteredUsers = () => {
  try {
    const users = JSON.parse(localStorage.getItem("userData"));
    return Array.isArray(users) ? users : [];
  } catch {
    return [];
  }
};

const AuthContextWrappper = ({ children }) => {
  const [user, setUser] = useState(readStoredUser);

  const login = (formData, rememberMe = false) => {
    const users = readRegisteredUsers();
    const email = formData.email.trim().toLowerCase();

    const matchedUser = users.find(
      (registeredUser) =>
        registeredUser.email?.toLowerCase() === email &&
        registeredUser.password === formData.password,
    );

    if (!matchedUser) {
      return false;
    }

    const { password: _password, ...safeUser } = matchedUser;
    const storage = rememberMe ? localStorage : sessionStorage;

    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    storage.setItem("user", JSON.stringify(safeUser));
    setUser(safeUser);

    return true;
  };

  const logout = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: Boolean(user), login, logout, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextWrappper;
export { AuthContext };
