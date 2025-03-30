// ProtectedRoute.js
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../provider/AuthContext"; // Importa o hook de autenticação

const ProtectedRoute = () => {
    const { token } = useAuth(); // Obtém o token do contexto

    if (!token) {
        // Se não houver token, redireciona para a página de login
        return <Navigate to="/login" />;
    }

    // Se houver token, renderiza os componentes filhos
    return <Outlet />;
};

export default ProtectedRoute;
