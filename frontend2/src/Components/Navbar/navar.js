import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { useAuth } from "./AuthContext";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("googleUser"))

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");
  const [showLoggedInText, setShowLoggedInText] = useState(false);
  const [credit, setCredit] = useState(5);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const roundBoxColor = isLoggedIn ? "color-for-logged-in-users" : "";
  const navigate = useNavigate();
  const credits = useSelector((state) => state?.credits?.credits);


  useEffect(() => {
    const googleUser = localStorage.getItem("googleUser");
    const simpleUser = localStorage.getItem("simpleUser");

    if (googleUser || simpleUser) {
      setShowLogoutButton(true);
    } else {
      setShowLogoutButton(false);
    }

    if (googleUser) {
      const parsedGoogleUser = JSON.parse(googleUser);
      setUserName(parsedGoogleUser.given_name);
      setUserImage(parsedGoogleUser.profile);
      setUserEmail(parsedGoogleUser.email);
      setCredit(parsedGoogleUser?.subscription?.credits);
      setIsLoggedIn(true);
      console.log(setUserImage);
    } else if (simpleUser) {
      const parsedSimpleUser = JSON.parse(simpleUser);
      setUserName(parsedSimpleUser.username);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    setShowLoggedInText(isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  function handleMessage(event) {
    if (event.data === "payment_successful") {
      setCredit("Unlimited");
      setShowLoggedInText(true);
    }
  }

  const handleLogout = () => {
    console.log("login");
    localStorage.removeItem("googleUser");
    localStorage.removeItem("simpleUser");
    localStorage.removeItem("userImage"); // Remove user image URL
    localStorage.removeItem("token"); // Remove the token
    setIsLoggedIn(false);
    setCredit();
    setShowLogoutButton(false);
    toast.success("You Logged Out", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
    });
    navigate("/login");
  };
  const {user:UserInfo}=useAuth()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gray-900 p-4">
      <Link to="/" className="navbar-logo">
        <img
          src={process.env.PUBLIC_URL + "/MMH_logo.png"}
          alt="Logo"
          className="max-h-10 ml-2 ml-md-6 max-h-md-8 md:ml-0"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div
        className="collapse navbar-collapse"
        style={{ alignItems: "baseline" }}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          {isLoggedIn && (
            <>
              <li className="nav-item">
                <Link to="/designing" className="nav-link nav-link12">
                  Generate
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pricing" className="nav-link nav-link1">
                  Pricing
                </Link>
              </li>
            </>
          )}
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            {showLoggedInText && (
              <div className="logedtext ">
                <div className="loggedInText px-4 py-2 text-white">
                  Your Credit: {UserInfo?.subscription?.status === "active" ? "Unlimited" : UserInfo?.subscription?.credits}
                </div>
              </div>
            )}
          </li>
          <li className="nav-item ml-bvv">
            {!isLoggedIn && (
              <Link to="/login" className="btn btn-login nav-link">
                LOG IN
              </Link>
            )}
            {isLoggedIn && (
              <div className="user-dropdown">
                <img
                  src={userImage}
                  alt={userName}
                  className={`user-round-box ${roundBoxColor}`}
                  style={{
                    backgroundColor: roundBoxColor,
                    width: "60px",
                    borderRadius: "50px",
                  }}
                  onClick={toggleDropdown}
                />

                {isDropdownOpen && (
                  <div className="dropdown-content absolute   bg-white rounded-lg shadow-lg">
                    <p
                      className="dropdown-username ml-4 mb-0 mt-2 "
                      style={{ fontSize: "19px", fontWeight: "bold" }}
                    >
                      {userName}
                    </p>
                    <p
                      className="dropdown-email ml-4"
                      style={{ fontSize: "12px" }}
                    >
                      {userEmail}
                    </p>
                    <hr />
                    <button className={` btn ml-3 `} onClick={handleLogout}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-2 h-4 w-4"
                      >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" x2="9" y1="12" y2="12"></line>
                      </svg>{" "}
                      Log out
                    </button>
                  </div>
                )}
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
