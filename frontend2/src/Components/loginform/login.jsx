import React, { useState, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import apiClient from "../../api/apiClient";
import jwt_decode from "jwt-decode";
import { json, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./loginform.css";
import { useDispatch } from "react-redux"
import { storeCredits } from "../../redux/userCredits";

const LoginForm = () => {
  const navigate = useNavigate();
  const [userImage, setUserImage] = useState(null);
  const dispatch = useDispatch();

  const responseMessage = async (response) => {
    console.log(response);
    const accessToken = response.credential;
    const user = jwt_decode(accessToken);

    try {
      const result = await apiClient.post("/auth/google", {
        googlePayload: user,
      });
      console.log(result)
      if (!result.ok) {

        toast.error(result.data.message || "Google Login Failed");
        return;
      }
      localStorage.setItem("googleUser", JSON.stringify(result.data.data));
      localStorage.setItem("token", JSON.stringify(result.data.token));
      navigate("/designing");
      window.location.reload();
      dispatch(storeCredits(result.data.data))
    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUserImage = async () => {
      try {
        const userImageResponse = await apiClient.get("/user/image");
        const userImageData = userImageResponse.data;
        localStorage.setItem(
          "userImage",
          JSON.stringify(userImageData.imageUrl)
        );
        setUserImage(userImageData.imageUrl);
      } catch (error) {
        console.error("Error fetching user image:", error);
      }
    };

    fetchUserImage();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-xl-9 m-auto col-lg-8  col-md-12 col-sm-12 col-xs-12">
          <div className="background-gradient">
            <p className="main-textmain">
              <span className="main-text2"> ALREADY GENERATED MORE THAN 1 MILLION DESIGNS </span>


            </p>
          </div>
          <h2 className="sub-heading" style={{ textAlign: "center" }}>
            Generate your dream house <br />
            in seconds using AI
          </h2>
          <p className="sub-text">
            Sign in below with Google to create a free account and redesign your
            room today. You will get 5 generations for free.
          </p>
        </div>
        <div className="col-xl-7 m-auto col-lg-8  col-md-12 col-sm-12 col-xs-12">
          <div className="">
            <div className="mt-5">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 nbv">
                  <GoogleLogin onSuccess={responseMessage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
