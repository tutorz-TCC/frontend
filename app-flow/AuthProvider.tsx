import React, { ReactNode, createContext, useContext, useState } from "react";

interface props {
  children: ReactNode;
}

const AuthContext = createContext();

export const AuthProvider = ({ children }: props) => {
  const [authToken, setAuthToken] = useState(false);

  const autorizarToken = () => {
	  setAuthToken(true)
  }
  return (
    <AuthContext.Provider value={{authToken, autorizarToken}}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
