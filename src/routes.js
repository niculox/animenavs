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

function AppRoutes(){
    return (
            <BrowserRouter> 
                <AuthProvider>
                <Routes>
                    <Route path="/" element={ <Home /> }></Route>
                    <Route path="/MyPage" element={ <ProtectedRoute /> }>
                        <Route path="" element={<MyPage />} />
                    </Route>
                    <Route path="/Login" element={ <Login /> }></Route>
                    <Route path="/Cadastro" element={ <Cadastro /> }></Route>
                    <Route path="/Anime/:id" element={ <Anime /> }></Route>
                    <Route path="/Indication/" element={ <Indication /> }></Route>
                    <Route path="*" element={ <PageNotFound /> }></Route>
                </Routes>
                </AuthProvider>
            </BrowserRouter>
        
    );
}

export default AppRoutes;
