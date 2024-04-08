import "./Calc.css";
import { Link } from "react-router-dom";

function IQtest() {
  return (
    <div>
      <div className="center">
        <Link to="/IQ" className="text-decor">
          <div class="zoom1">
            <h1 id="color">IQ</h1>
          </div>
        </Link>
      </div>
      <Link to="/IQ1" className="zoom">
        <h3 id="IQh3">Ages 1 - 20</h3>
      </Link>
      <Link to="/IQ2" className="zoom">
        <h3 id="IQh3">Ages 20 - 40</h3>
      </Link>
      <Link to="/IQ3" className="zoom">
        <h3 id="IQh3">Ages 40 - 70</h3>
      </Link>
    </div>
  );
}

export default IQtest;
