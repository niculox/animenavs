// src/provider/AuthContext.js
import React, { createContext, useContext } from 'react';
import useAuthProvider from './useAuthProvider'; // Atualizado para usar o novo hook

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const auth = useAuthProvider(); // Usa o hook personalizado

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
