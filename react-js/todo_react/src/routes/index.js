import { BrowserRouter, Routes, Route  } from "react-router-dom";

import { HomeView, LoginView, ProfileView,TaskView, TodoAppView,SignUpView, BooksView } from "../pages";
import { MainLayout } from "../layaout";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomeView/>} />
                <Route path="/books" element={<BooksView/>} />
                <Route path="/todoapp" element={<TodoAppView/>} />
                <Route path="/perfil" element={<ProfileView/>} />
                <Route path="/task/:id" element={<TaskView />} />

            </Route>
                <Route path="/login" element={<LoginView/>} />
                <Route path="/signup" element={<SignUpView/>} />
            </Routes>
            
        
        </BrowserRouter>
    )
}

export default Router;
