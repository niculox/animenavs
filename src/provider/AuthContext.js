// src/provider/AuthContext.js
import React, { createContext, useContext } from 'react';
import useAuthProvider from './useAuthProvider'; // Importa o hook de autenticação

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const auth = useAuthProvider(); // Usa o hook de autenticação

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext); // Retorna o contexto de autenticação
};
