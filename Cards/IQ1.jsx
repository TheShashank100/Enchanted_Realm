import React from "react";
import { Link } from "react-router-dom";
import "./Calc.css";

function IQ1() {
  return (
    <div>
      <div className="center">
        <Link to="/IQtest" className="text-decor">
          <div className="zoom1">
            <h1 id="color">Back</h1>
          </div>
        </Link>
      </div>
      <div class="IQcenter">
        <div class="MainBox">
          <h3 id="I">20 questions. 4 options. Find the truth.</h3>
          <h3 id="I">Unlock secrets. 20 questions. Desipher wisely.</h3>
          <h3 id="I">Test your wit. 20 questions. Seek the answers.</h3>
          <Link to="/IQ10" class="zoom">
            <h1 class="Iqbutton">Start the test Now!</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IQ1;
