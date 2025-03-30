import { useNavigate } from 'react-router-dom';

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
                throw new Error(errorData.message || 'Erro ao fazer login');
            }
    
            const data = await response.json();
            localStorage.setItem('token', data.token);

            // Codifica o token para garantir que ele seja seguro na URL
            const encodedToken = encodeURIComponent(data.token);

            // Redireciona para MyPage passando o token na URL
            navigate(`/mypage/${encodedToken}`);

        } catch (error) {
            console.error('Erro no login:', error);
            alert(`Erro: ${error.message}`); // Exibe uma mensagem de erro ao usuário
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
            throw new Error('Usuário não autenticado');
        }
    };

    const getIdentity = () => {
        const token = localStorage.getItem('token');
        if (token) {
            // Aqui você pode decodificar o token para obter informações do usuário
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

export default useAuthProvider;
