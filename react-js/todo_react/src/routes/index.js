import { BrowserRouter, Routes, Route  } from "react-router-dom";

import { HomeView, LoginView, ProfileView,TaskView, TodoAppView } from "../pages";
import { MainLayout } from "../layaout";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomeView/>} />
                <Route path="/todoapp" element={<TodoAppView/>} />
                <Route path="/perfil" element={<ProfileView/>} />
                <Route path="/task/:id" element={<TaskView />} />

            </Route>
                <Route path="/login" element={<LoginView/>} />
            </Routes>
            
        
        </BrowserRouter>
    )
}

export default Router;
