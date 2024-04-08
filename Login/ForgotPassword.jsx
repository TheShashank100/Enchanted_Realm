import { useState } from "react";
import { auth } from "../../FirebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";
import "../Cards/Calc.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleResetPassword(e) {
    e.preventDefault();

    try {
      // Send password reset email
      await sendPasswordResetEmail(auth, email);

      // Display success message
      setSuccessMessage("Password reset email sent. Please check your inbox.");

      // Clear form
      setEmail("");
    } catch (error) {
      console.error("Error in Reset Password: ", error.message);

      if (error.code === "auth/user-not-found") {
        setErrorMessage("Email address not found. Please enter a valid email.");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  }

  return (
    <div className="forgot-password-container">
      <h1 className="calcColor">Forgot Password</h1>

      <form className="forgot-password-form" onSubmit={handleResetPassword}>
        <label className="calcColor">Email</label>
        <br />
        <input
          className="forgot-password-input"
          placeholder="Enter Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button className="forgot-password-button" type="submit">
          Reset Password
        </button>
        {errorMessage && <p className="calcColor">{errorMessage}</p>}
        {successMessage && <p className="calcColor">{successMessage}</p>}
      </form>
      <Link to="/login" className="back-to-login-button">
        Back to Login
      </Link>
    </div>
  );
}

export default ForgotPassword;
