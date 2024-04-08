import { Link } from "react-router-dom";

function IQ() {
  return (
    <div>
      <div className="center">
        <Link to="/" className="text-decor">
          <div class="zoom1">
            <h1 id="color">IQ</h1>
          </div>
        </Link>
      </div>
      <h2 id="titleIq">
        Get your IQ score within 10 minutes. The Official IQ Test
      </h2>
      <Link to="/IQtest" class="zoom">
        <h3 id="IqButton"> Get your score today</h3>
      </Link>
    </div>
  );
}

export default IQ;
