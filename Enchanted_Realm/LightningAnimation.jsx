import React, { useState, useEffect } from "react";
import "./LightningAnimation.css";

function LightningAnimation() {
  const [showMessage, setShowMessage] = useState(false);
  const [showHammer, setShowHammer] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMessage(true);
      setShowHammer(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="lightning-container">
      <div className={`lightning${showMessage ? " active" : ""}`}>
        <div className="bolt"></div>
        <div className="bolt"></div>
        <div className="bolt"></div>
        <div className="bolt"></div>
        <div className="zigzag-line"></div>
        <div className="thunderbolt"></div>
      </div>
      {showHammer && (
        <img
          src="https://freepngimg.com/save/75592-theatrical-america-gray-mjolnir-hammer-thor-property/658x658"
          alt="Thor's Hammer"
          className="thor-hammer"
          onAnimationEnd={() => setShowHammer(false)}
        />
      )}
      {showMessage && <div className="message">Thor Unlocked!</div>}
    </div>
  );
}

export default LightningAnimation;
