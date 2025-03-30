// ProtectedRoute.js
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../provider/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { checkAuth } = useAuth();

    try {
        checkAuth(); // Verifica se o usuário está autenticado
        return children; // Se autenticado, renderiza a página
    } catch (error) {
        return <Navigate to="/Login" />; // Redireciona para a página de login se não estiver autenticado
    }
};

export default ProtectedRoute;
