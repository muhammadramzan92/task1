import "./Pricing.css";
import EndImage from "../endlogo/endimage";
import Footer from "../footer/footer";
import React, { useEffect, useState } from "react";
import { makePayment } from "./paymentapi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../Navbar/AuthContext";
function Pricing() {
  const [paymentData, setPaymentData] = useState(null);
  const [newStringState, setNewStringState] = useState("");

  const [notificationMessage, setNotificationMessage] = useState("");
  const {user,setUser,refresh,setRefresh}=useAuth()
  // const [notificationMessage, setNotificationMessage] = useState("");
  const isSubscribed9=user?.subscription?.type=="1-month"
  const isSubscribed24 = user?.subscription?.type=="6-month"


  async function dataPayment(amount) {
    try {
      const response = await makePayment({ amount });
      if(!response?._links?.checkout?.href)
      return toast.error("Payment Failed")
      window.location.replace(response?._links?.checkout.href);

      setPaymentData(response?.data?.amount?.value);
      const amountValue = response?.data?.amount?.value;
      setNewStringState(amountValue ? String(amountValue) : "");
    } catch (error) {
      console.error(error);
    }
  }
  function showNotification(message) {
    setNotificationMessage(message);
    alert(message);
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xl-1  col-lg-1  col-md-12 col-sm-12 col-xs-12"></div>
          <div className="col-xl-10 m-auto col-lg-8  col-md-12 col-sm-12 col-xs-12">
            <div className="background-gradient1">
              <p className="main-text main-text133">
                <span className="main-text1">PRICING PLAN</span>
              </p>
            </div>
            <h2 className="sub-heading">Buy MagicMyHouse credits</h2>
            <p className="sub-text">
              Join thousands of happy customers. Explore more options below.
            </p>
          </div>
          <div className="col-xl-1  col-lg-1  col-md-12 col-sm-12 col-xs-12"></div>
        </div>
        <div className="row mt-5">
          <div className="col-xl-1 col-lg-1  col-md-12 col-sm-12 col-xs-12"></div>
          <div className="col-xl-5 mt-4 col-lg-5  col-md-12 col-sm-12 col-xs-12">
            <div className="">
              <div className="box1">
                <div className="pac">1 Month Package</div>
                <div className="price-heading">$5</div>
                <div className="price-description">
                  Unlimited credits <br />
                  
                </div>
                <span className="colorrr"> For a duration of 1 month</span>
                <div style={{textAlign:'center'}}>
                {isSubscribed9 ? (
                  <button
                    className="pay-button"
                    style={{
                      width: "18rem",
                      textAlign: "center",
                      paddingRight: "9rem",
                      paddingLeft: "6rem",
                    }}
                    
                    disabled
                  >
                    Subscribed
                  </button>
                ) : (
                  <button
                    className="pay-button"
                    onClick={() => {
                      dataPayment(5);
                    }}
                    style={{opacity:isSubscribed24?0.2:1}}
                    disabled={isSubscribed24}
                  >
                    PAY
                  </button>
                )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5  mt-4 col-lg-5  col-md-12 col-sm-12 col-xs-12">
            <div className="">
              <div className="box2">
                <div className="pac">6 Months Package</div>
                <div className="price-heading">$9</div>
                <div className="price-description">
                  Unlimited credits <br />
                  
                </div>
                <span className="colorrr"> For a duration of 6 months</span>
                <div style={{textAlign:'center'}}>
                {isSubscribed24 ? (
                  <button
                    className="pay-button"
                    style={{
                      width: "18rem",
                      textAlign: "center",
                      paddingRight: "9rem",
                      paddingLeft: "6rem",
                    }}
                    disabled
                  >
                    Subscribed
                  </button>
                ) : (
                  <button
                    className="pay-button"
                    onClick={() => {
                      dataPayment(9);
                    }}
                  >
                    PAY
                  </button>
                )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-1 col-lg-1  col-md-12 col-sm-12 col-xs-12"></div>
        </div>
        <div className="row mt-5">
          <div className="col-xl-1 col-lg-1  col-md-12 col-sm-12 col-xs-12"></div>
          <div className="col-xl-5 col-lg-5  col-md-12 col-sm-12 col-xs-12">
            <div className="x12">
            <p style={{ fontSize: '16px' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  style={{
                    justifyContent: "space-between",
                    marginRight: "10px",
                  }}
                  fill="#009EE2"
                  class="bi bi-check2-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                </svg>
                Onetime payments
              </p>
              <p style={{ fontSize: '16px' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  style={{
                    justifyContent: "space-between",
                    marginRight: "10px",
                  }}
                  fill="#009EE2"
                  class="bi bi-check2-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                </svg>
                Premium support by email
              </p>
              <p style={{ fontSize: '16px' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  style={{
                    justifyContent: "space-between",
                    marginRight: "10px",
                  }}
                  fill="#009EE2"
                  class="bi bi-check2-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                </svg>
                Commercial usage of photos
              </p>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5  col-md-12 col-sm-12 col-xs-12 x121">
            <div className="x12">
            <p style={{ fontSize: '16px' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  style={{
                    justifyContent: "space-between",
                    marginRight: "10px",
                  }}
                  fill="#009EE2"
                  class="bi bi-check2-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                </svg>
                Onetime payments
              </p>
              <p style={{ fontSize: '16px' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  style={{
                    justifyContent: "space-between",
                    marginRight: "10px",
                  }}
                  fill="#009EE2"
                  class="bi bi-check2-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                </svg>
                Premium support by email
              </p>
              <p style={{ fontSize: '16px' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  style={{
                    justifyContent: "space-between",
                    marginRight: "10px",
                  }}
                  fill="#009EE2"
                  class="bi bi-check2-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                </svg>
                Commercial usage of photos
              </p>
            </div>
          </div>

          <div className="col-xl-1 col-lg-1  col-md-12 col-sm-12 col-xs-12"></div>
        </div>
        {/* <div className="row mt-5">
          <div className="col-xl-8 m-auto col-lg-10  col-md-12 col-sm-12 col-xs-12">
            <div className="ok123">
              <p className="main-text" style={{ marginBottom: "0" }}>
                Interested in team or bulk pricing? Email :
                info@magicmyhouse.com or KVK : 08214009
              </p>
            </div>
          </div>
        </div> */}
        <div className="circle left-top"></div>
        <div className="circle right-top"></div>
      </div>

      <EndImage />
      <Footer />
    </div>
  );
}
export default Pricing;
