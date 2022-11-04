import { BrowserRouter, Routes, Route  } from "react-router-dom";

import { HomeView, ProfileView } from "../pages";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView/>} />
                <Route path="/perfil" element={<ProfileView/>} />
            </Routes>
        
        </BrowserRouter>
    )
}

export default Router;
