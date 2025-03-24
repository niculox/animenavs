import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import PageNotFound from "./pages/PageNotFound";

function AppRoutes(){
    return (
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/MyPage" element={ <MyPage /> }></Route>
                <Route path="*" element={ <PageNotFound /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
