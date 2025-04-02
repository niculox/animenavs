import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './provider/AuthContext'; 
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Anime from "./pages/Anime";
import Indication from "./pages/Indication";
import ProtectedRoute from './components/ProtectedRoute';
import { FavoritesContext } from "./contexts/Favorito";

function AppRoutes() {
    return (
        <BrowserRouter> 
            <AuthProvider>
                
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/mypage" element={<ProtectedRoute><MyPage /></ProtectedRoute>} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                        <Route path="/anime/:id" element={<Anime />} />
                        <Route path="/indication" element={<Indication />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>

            </AuthProvider>
        </BrowserRouter>
    );
}

export default AppRoutes;
