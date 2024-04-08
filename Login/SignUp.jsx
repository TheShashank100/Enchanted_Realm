import { useEffect, useState } from "react";
import { db, auth, provider } from "../../FirebaseConfig";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import "./login.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if the user is registered with Google
      if (
        user.providerData.some(
          (provider) => provider.providerId === "google.com"
        )
      ) {
        setError(
          "An account with Google already exists. Please log in instead."
        );
        return;
      }

      setValue(user.email);
      localStorage.setItem("email", user.email);
    } catch (error) {
      console.error("Error signing in with Google: ", error.message);
      setError("An error occurred during Google sign in. Please try again.");
    }
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  async function registerUser(e) {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password should be at least 6 characters long.");
      return;
    }

    try {
      // Create a new user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Get the user
      const user = userCredential.user;

      // Add user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        username,
        email
      });

      // Redirect to profile page
      navigate("/profile");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setError("Invalid email format.");
      } else if (error.code === "auth/email-already-in-use") {
        setError("Email is already in use. Please log in instead.");
        navigate("/login");
      } else {
        console.error("Error in Registration: ", error.message);
        setError("An error occurred during registration. Please try again.");
      }
    }
  }

  const isFormValid = username !== "" && email !== "" && password !== "";

  return (
    <div className="signup-container">
      <h1 className="signup-heading">Register on my Webapp!</h1>

      <form className="signup-form" onSubmit={registerUser}>
        <label className="signup-label">Username</label>
        <br />
        <input
          className="signup-input"
          placeholder="Enter Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label className="signup-label">Email</label>
        <br />
        <input
          className="signup-input"
          placeholder="Enter Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <label className="signup-label">Password</label>
        <br />
        <input
          className="signup-input"
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signup-button" type="submit">
          Sign Up
        </button>
        <br />
        <button className="signup-button" onClick={handleClick}>
          Continue with Google
        </button>
        {error && <p className="signup-error">{error}</p>}
      </form>
      <p className="signup-login-link">
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
}

export default Signup;
