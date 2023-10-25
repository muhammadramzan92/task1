import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/navar";
import Home from "./Components/homeSection/home";
import ImageWithText from "./Components/image withtextbox/imagewithTextbbox";
import "./App.css";
import EndImage from "./Components/endlogo/endimage";
import Footer from "./Components/footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./Components/loginform/login";
import Pricing from "./Components/pricing/pricing";
import RedesignHouse from "./Components/redesignhouse/redesignhouse";
import "@fontsource/poppins";
import { ProtectedRoute } from "./protectedRoutes/userVerification";
import { ProtectedLoginRoute } from "./protectedRoutes/userValidation";
import Privacy from "./Components/privacy/privacy";
import Terms from "./Components/privacy/terms";
import apiClient from "./api/apiClient";
import { useAuth } from "./Components/Navbar/AuthContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("token") !== null;

    if (isAuthenticated) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  const [userCredit, setUserCredit] = useState(3); // Initial credit count
const {user,setUser,refresh,setRefresh}=useAuth()
  // Function to update user's credit
  const updateUserCredit = (newCredit) => {
    setUserCredit(newCredit);
  };
  const [credits, setCredits] = useState("unlimited");
  // Function to update credits
  const updateCredits = (newCredits) => {
    setCredits(newCredits);
  };
  useEffect(()=>{
if(localStorage.getItem("token")&&refresh==true)
fetchUserInfo()
  },[refresh])
const fetchUserInfo=async()=>{
  const result=await apiClient.get("/auth/user-info")
  setUser(result.data)
  setRefresh(false)
}
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar userCredit={userCredit} isLoggedIn={isLoggedIn} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <ProtectedLoginRoute>
                {" "}
                <LoginForm />
              </ProtectedLoginRoute>
            }
          />
          <Route
            path="pricing"
            element={
              <ProtectedRoute>
                <Pricing
                  updateUserCredit={updateUserCredit}
                  updateCredits={updateCredits}
                />
              </ProtectedRoute>
            }
          >
            {" "}
          </Route>
          <Route
            path="/designing"
            element={
              <ProtectedRoute>
                <RedesignHouse credits={credits} />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>

        <Routes>
          <Route path="/" element={<ImageWithText />} />
        </Routes>
        <Routes>
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Routes>
          <Route path="/term" element={<Terms />} />
        </Routes>

        <Routes>
          <Route path="/" element={<EndImage />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Footer isLoggedIn={isLoggedIn} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
