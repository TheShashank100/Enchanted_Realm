import { useState } from "react";
import { auth, provider } from "../../FirebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function loginUser(e) {
    e.preventDefault();

    try {
      // Sign in user with email and password
      await signInWithEmailAndPassword(auth, email, password);

      // Redirect to profile page or any desired page
      navigate("/profile");
    } catch (error) {
      console.error("Error in Login: ", error.message);
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        setError("Invalid email or password. Please try again.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  }

  async function loginWithGoogle() {
    try {
      // Sign in user with Google provider
      await signInWithPopup(auth, provider);

      // Redirect to profile page or any desired page
      navigate("/profile");
    } catch (error) {
      console.error("Error in Login with Google: ", error.message);
      setError("An error occurred. Please try again.");
    }
  }

  // Check if all fields are filled
  const isFormValid = email !== "" && password !== "";

  return (
    <div className="login-container">
      <h1>Login to my Web app!</h1>

      <form className="login-form" onSubmit={loginUser}>
        <label>Email</label>
        <br />
        <input
          className="login-input"
          placeholder="Enter Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <label>Password</label>
        <br />
        <input
          className="login-input"
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="button" type="submit">
          Log In
        </button>
        <p className="forgot-password">
          <Link to="/forgot-password">Forgot password?</Link>
        </p>
        {error && <p>{error}</p>}
      </form>
      <button className="button" onClick={loginWithGoogle}>
        Log In with Google
      </button>
      <p className="signup-link">
        Don't have an account? <Link to="/log">Create one</Link>
      </p>
    </div>
  );
}

export default Login;
