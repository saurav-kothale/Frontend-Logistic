import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import SideBar from "./component/sidebar";
import CreatePost from "./component/CreatePost";
import Post from "./component/Post";
import Slab from "./component/slab";
import React from "react";
import FileUpload from "./component/FileUpload";
import LoginForm from "./component/login";
import Dashboard from "./component/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Clear the token from localStorage or your storage method
    localStorage.removeItem("token");
    setLoggedIn(false);
  };
  


  return (
    <div>
    <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
        height: 100vh;
        width: 100vw;
      }
    `}</style>
  
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
