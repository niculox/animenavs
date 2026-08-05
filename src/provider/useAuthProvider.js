import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

// Substitua pela URL gerada no Render quando fizer o deploy
const API_URL = process.env.REACT_APP_API_URL || 'https://seu-backend.onrender.com';

const useAuthProvider = () => {
    const navigate = useNavigate();

    const login = async ({ username, senha }) => {
        try {
            const response = await fetch(`${API_URL}/Login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, senha }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.erro || 'Erro ao fazer login');
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);
            navigate('/mypage');

        } catch (error) {
            console.error('Erro no login:', error);
            alert(`Erro: ${error.message}`);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const checkAuth = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Usuário não autenticado');
        }
    };

    const getIdentity = () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                return jwt_decode(token);
            } catch (error) {
                console.error('Erro ao decodificar o token:', error);
                return null;
            }
        }
        return null;
    };

    return {
        login,
        logout,
        checkAuth,
        getIdentity,
    };
};

export default useAuthProvider;
