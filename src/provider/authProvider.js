// src/provider/authProvider.js
import { useNavigate } from 'react-router-dom';

const authProvider = () => {
    const navigate = useNavigate();

    const login = async ({ username, senha }) => {
        try {
            const response = await fetch('http://localhost:3000/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, senha }),
            });

            if (!response.ok) {
                throw new Error('Erro ao fazer login');
            }

            const data = await response.json();
            localStorage.setItem('token', data.token); // Armazena o token
            navigate('/mypage'); // Redireciona para a página MyPage após login
        } catch (error) {
            console.error('Erro no login:', error);
            throw error; // Propaga o erro para ser tratado no componente
        }
    };

    const logout = () => {
        localStorage.removeItem('token'); // Remove o token
        navigate('/login'); // Redireciona para a página de login
    };

    const checkAuth = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Usuário não autenticado');
        }
        // Aqui você pode adicionar lógica para verificar se o token é válido
    };

    const getIdentity = () => {
        const token = localStorage.getItem('token');
        if (token) {
            // Aqui você pode decodificar o token para obter informações do usuário
            // Por exemplo, usando jwt-decode
            // const decoded = jwt_decode(token);
            // return { id: decoded.id, username: decoded.username };
            return { id: 'user_id_placeholder', username: 'username_placeholder' }; // Placeholder
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

export default authProvider;
