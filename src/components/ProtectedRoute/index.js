import { Navigate, Outlet, useParams } from 'react-router-dom';
import { useAuth } from "../../provider/AuthContext"; // Importa o hook de autenticação

const ProtectedRoute = () => {
    const { token } = useParams(); // Pega o token da URL
    const { getIdentity } = useAuth(); // Função para obter identidade do usuário

    console.log("Token da URL: ", token); // Verifique se o token está sendo lido da URL

    // Se o token estiver presente na URL, garanta que ele é válido e que os dados sejam decodificados
    if (!token && !getIdentity()) {
        // Se não houver token, redireciona para login
        return <Navigate to="/login" />;
    }

    // Se houver token válido, renderiza o conteúdo da página
    return <Outlet />;
};

export default ProtectedRoute;
