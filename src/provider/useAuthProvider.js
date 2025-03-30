import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const useAuthProvider = () => {
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
                const errorData = await response.json();
                throw new Error(errorData.erro || 'Erro ao fazer login');
            }

            const data = await response.json();
            localStorage.setItem('token', data.token); // Armazena o token no localStorage
            console.log("Token gerado: ", data.token); // Verifique se o token está correto
            navigate('/mypage'); // Redireciona para MyPage

        } catch (error) {
            console.error('Erro no login:', error);
            alert(`Erro: ${error.message}`);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('token'); // Remove o token
        navigate('/login'); // Redireciona para a página de login
    };

    const checkAuth = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Usuário não autenticado'); // Lança um erro se não houver token
        }
    };

    const getIdentity = () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decoded = jwt_decode(token); // Decodifica o token
                console.log('Decoded token:', decoded); // Verifique os dados decodificados
                return decoded; // Retorna o usuário decodificado
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