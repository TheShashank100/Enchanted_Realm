import React from "react";
import { Link } from "react-router-dom";
import "./Calc.css";

function IQ2() {
  return (
    <div>
      <div className="center">
        <Link to="/IQtest" className="text-decor">
          <div className="zoom1">
            <h1 id="color">Back</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default IQ2;
