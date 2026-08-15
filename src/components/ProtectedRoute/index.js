import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../provider/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  // Feedback acessível durante a validação da sessão
  if (loading) {
    return (
      <div
        role="status"
        aria-live="polite"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '50vh',
          fontSize: '1.1rem',
          color: '#555555',
        }}
      >
        <span>Verificando autenticação...</span>
      </div>
    );
  }

  // Redireciona para o login caso não esteja autenticado
  if (!isAuthenticated) {
    return <Navigate to="/Login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
