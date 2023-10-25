import React from 'react';

const SigninGoogle = () => {
  const handleGoogleSignIn = () => {
    // Redirect the user to the Google OAuth2 authentication route
    window.location.href = 'http://localhost:5000/auth/google';
  };

  // Check if the URL contains a callback from Google OAuth2
  // You can use a library like `react-router-dom` for better route handling
  if (window.location.pathname === '/auth/google/callback') {
    // Handle the callback route logic here
    // This is where Google will redirect the user after authentication
    // You can perform actions like fetching user data and storing tokens.
    // Make API requests as needed.
    // After handling the callback, you can navigate to a different page or show a success message.
    return (
      <div className="container mt-5">
        <h2>Handling Google Sign-in Callback</h2>
        {/* Add your callback handling logic here */}
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Sign in with Google</h2>
      <button
        className="btn btn-danger"
        onClick={handleGoogleSignIn}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default SigninGoogle;