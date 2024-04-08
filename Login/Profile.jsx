import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import "../Cards/Calc.css";

function Profile() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const navigate = useNavigate();

  async function fetchUserData(uid) {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      return userData.username;
    } else {
      console.log("No such document!");
      return null;
    }
  }

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const username = await fetchUserData(currentUser.uid);
        setUsername(username);
      } else {
        setUser(null);
        setUsername(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      navigate("/log");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const handleProfileDataChange = (newProfileData) => {
    setProfileData(newProfileData);
    // Save the updated profile data to the database or perform any other necessary actions
    // For example, you can update the Firestore document for the user with the new profile data
  };

  if (!user) {
    return <h2 class="calcColor">You must be logged in to view this page.</h2>;
    <Link to="/" class="button">
      Home
    </Link>;
  }

  return (
    <div>
      <h1 className="calcColor">Welcome, {username}!</h1>
      <button className="button" onClick={handleLogout}>
        Logout
      </button>
      <Link to="/" className="button">
        Go to Home
      </Link>
      <ProfileEditor
        profileData={profileData}
        onChange={handleProfileDataChange}
      />
    </div>
  );
}

function ProfileEditor({ profileData, onChange }) {
  const [faceColor, setFaceColor] = useState(
    profileData?.faceColor || "#F2C993"
  );
  const [eyeColor, setEyeColor] = useState(profileData?.eyeColor || "#4A90E2");
  const [eyeShape, setEyeShape] = useState(profileData?.eyeShape || "round");
  const [mouthColor, setMouthColor] = useState(
    profileData?.mouthColor || "#FF0000"
  );
  const [mouthShape, setMouthShape] = useState(
    profileData?.mouthShape || "smile"
  );

  useEffect(() => {
    // Update the profile data whenever any input changes
    const newProfileData = {
      faceColor,
      eyeColor,
      eyeShape,
      mouthColor,
      mouthShape
    };
    onChange(newProfileData);
  }, [faceColor, eyeColor, eyeShape, mouthColor, mouthShape, onChange]);

  return (
    <div className="profile-editor">
      <h2 className="calcColor">Profile Editor</h2>
      <div className="color-input">
        <label className="calcColor" htmlFor="faceColor">
          Face Color:
        </label>
        <input
          type="color"
          id="faceColor"
          value={faceColor}
          onChange={(e) => setFaceColor(e.target.value)}
        />
      </div>
      <div className="color-input">
        <label className="calcColor" htmlFor="eyeColor">
          Eye Color:
        </label>
        <input
          type="color"
          id="eyeColor"
          value={eyeColor}
          onChange={(e) => setEyeColor(e.target.value)}
        />
      </div>
      <div className="shape-input">
        <label className="calcColor" htmlFor="eyeShape">
          Eye Shape:
        </label>
        <select
          id="eyeShape"
          value={eyeShape}
          onChange={(e) => setEyeShape(e.target.value)}
        >
          <option value="round">Round</option>
          <option value="almond">Almond</option>
          <option value="cat">Cat</option>
        </select>
      </div>
      <div className="color-input">
        <label className="calcColor" htmlFor="mouthColor">
          Mouth Color:
        </label>
        <input
          type="color"
          id="mouthColor"
          value={mouthColor}
          onChange={(e) => setMouthColor(e.target.value)}
        />
      </div>
      <div className="shape-input">
        <label className="calcColor" htmlFor="mouthShape">
          Mouth Shape:
        </label>
        <select
          id="mouthShape"
          value={mouthShape}
          onChange={(e) => setMouthShape(e.target.value)}
        >
          <option value="smile">Smile</option>
          <option value="frown">Frown</option>
          <option value="neutral">Neutral</option>
        </select>
      </div>
      <div className="preview-container">
        <h3 className="calcColor">Preview:</h3>
        <div className="profile-preview" style={{ backgroundColor: faceColor }}>
          <div
            className={`eye ${eyeShape}`}
            style={{ backgroundColor: eyeColor }}
          ></div>
          <div
            className={`eye ${eyeShape}`}
            style={{ backgroundColor: eyeColor }}
          ></div>
          <div
            className={`mouth ${mouthShape}`}
            style={{ backgroundColor: mouthColor }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
