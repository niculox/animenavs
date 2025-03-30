import { Navigate, Outlet, useParams } from "react-router-dom";

const ProtectedRoute = () => {
    const { token } = useParams(); // Obtém o token da URL

    if (!token) {
        console.log("Token não encontrado! Redirecionando para login...");
        return <Navigate to="/login" />;
    }

    console.log("Token encontrado:", token);
    return <Outlet />;
};

export default ProtectedRoute;
