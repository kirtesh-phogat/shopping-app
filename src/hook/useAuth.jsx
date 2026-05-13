import { useContext } from "react";
import { AuthContext } from "../context/AuthContextWrappper";

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined || context === null) {
    throw new Error("useAuth must be used within AuthContextProvider");
  }

  return context;
};

export default useAuth;