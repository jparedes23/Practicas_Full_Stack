import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginView, RegisterView } from "../pages";


import React from 'react'
import Register from "../pages/Register";

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginView />} />
            <Route path="/sign-up" element={<RegisterView />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;

