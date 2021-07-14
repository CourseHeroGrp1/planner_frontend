import "./App.css";

import React, { useState } from "react";
import AuthContext from "context/auth";
import { Navbar, Login, Register, Home, LandingPage } from "components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useApp } from "hooks/useApp";

function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const [maintabs, setMaintabs] = useState([]);

  const { user, setUser, authenticated, setAuthenticated } = useApp();

  return (
    <AuthContext.Provider value={{ user, setUser, authenticated, setAuthenticated, maintabs, setMaintabs, setErrors, setIsLoading }}>
      <div className="App">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
