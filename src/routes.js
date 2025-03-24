import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";

function AppRoutes(){
    return (
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/MyPage" element={ <MyPage /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
