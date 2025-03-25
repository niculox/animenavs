import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

function AppRoutes(){
    return (
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/MyPage" element={ <MyPage /> }></Route>
                <Route path="/Login" element={ <Login /> }></Route>
                <Route path="/Cadastro" element={ <Cadastro /> }></Route>
                <Route path="*" element={ <PageNotFound /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
