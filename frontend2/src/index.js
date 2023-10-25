import React from "react";
import ReactDOM from "react-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { AuthProvider } from "./Components/Navbar/AuthContext";

//Test Key = 226594385688-7k0o6dqnvdd4osgt8liec3hsmnp6v9dh.apps.googleusercontent.com
//Live Key = 444710794299-90qrth72iv3rvcare5oa57lhkl7vm4tr.apps.googleusercontent.com

ReactDOM.render(
  <AuthProvider>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GoogleOAuthProvider clientId="226594385688-7k0o6dqnvdd4osgt8liec3hsmnp6v9dh.apps.googleusercontent.com">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <App />
      </GoogleOAuthProvider>
    </PersistGate>
  </Provider>
  </AuthProvider>,
  document.getElementById("root")
);
