import React, { useState, useEffect } from "react";
import LightningAnimation from "../Enchanted_Realm/LightningAnimation";
import { db } from "../../FirebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";

function ClickerGame() {
  const [count, setCount] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationVisible, setAnimationVisible] = useState(false);
  const [thorButtonEnabled, setThorButtonEnabled] = useState(false);

  useEffect(() => {
    // Fetch the current count from Firestore when the component mounts
    const fetchClicks = async () => {
      const docRef = doc(db, "clicks", "counter");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setCount(docSnap.data().click);
      } else {
        console.log("No such document!");
      }
    };

    fetchClicks();
  }, []);

  useEffect(() => {
    if (count === 100) {
      setThorButtonEnabled(true);
      setShowAnimation(true);
      setAnimationVisible(true);

      setTimeout(() => {
        setShowAnimation(false);

        setTimeout(() => {
          setAnimationVisible(false);
        }, 5000); // Hide the animation after 5 seconds
      }, 5000); // Duration of the animation in milliseconds (5 seconds)

      // Update the Firestore document with the updated count
      const updateClicks = async () => {
        try {
          await setDoc(doc(db, "clicks", "counter"), { click: count });
          console.log("Clicks updated successfully!");
        } catch (error) {
          console.error("Error updating clicks: ", error);
        }
      };

      updateClicks();
    }
  }, [count]);
  const handleThanosClick = async () => {
    if (count < 100) {
      setCount(count + 1);
    }
    if (count >= 100) {
      setCount(count + 2);
    }

    // Update the Firestore document with the latest count
    try {
      await setDoc(doc(db, "clicks", "counter"), { click: count });
      console.log("Clicks updated successfully!");
    } catch (error) {
      console.error("Error updating clicks: ", error);
    }
  };

  return (
    <div className="characters">
      {showAnimation && animationVisible && <LightningAnimation />}
      <div id="score"> Clicks: {count} </div>
      <div id="click-area">
        <span>
          <div id="status-bar">
            <div id="status-bar-progress"></div>
          </div>
        </span>

        <button id="decrease-button" onClick={handleThanosClick}>
          <img id="img1" src="https://i.imgur.com/Ftw9p5g.png" alt="Thanos" />
        </button>
      </div>
      <h1 className="clicker-title">Heroes to unlock</h1>
      <div className="hereosSpaced">
        <img id="img" src="https://i.imgur.com/sDAS8UF.png" alt="Thor" />
        <img
          id="img"
          src="https://i.imgur.com/ecmDi5F.png"
          alt="Captain America"
        />
        <img
          id="img"
          src="https://i.imgur.com/qPwwLIG.png"
          alt="Captain Marvel"
        />
      </div>
      <div className="hereosSpaced">
        <img
          id="img"
          src="https://i.imgur.com/dLcedGH.png"
          alt="Doctor Strange"
        />
        <img id="img" src="https://i.imgur.com/Vt4Ykh2.png" alt="Hulk" />
        <img id="img" src="https://i.imgur.com/Ob1v8De.png" alt="Iron Man" />
      </div>
      <div className="hereosSpaced">
        <img id="img" src="https://i.imgur.com/dkTIeNc.png" alt="Spider-Man" />
        <img id="img" src="https://i.imgur.com/uEr8Mqe.png" alt="Black Widow" />
        <img id="img" src="https://i.imgur.com/jySgHLF.png" alt="War Machine" />
      </div>
    </div>
  );
}

export default ClickerGame;
