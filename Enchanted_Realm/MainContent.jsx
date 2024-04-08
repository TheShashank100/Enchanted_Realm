import { Link, Route, Routes } from "react-router-dom";
import Calc from "../Cards/Calc";
import "../Cards/Calc.css";
import "./Navigate";
import QuoteGenerator from "./quoteGen";

function Cards() {
  return (
    <router>
      <div className="App">
        <Link to="/IQ" class="text-decor">
          <div class="zoom">
            <h1 class="b1">
              Interactive Quizzes
              <hr />
            </h1>
          </div>
        </Link>
        <Link to="/Calc" class="text-decor">
          <div class="zoom">
            <h1 class="b1">
              Calculator
              <hr />
            </h1>
          </div>
        </Link>
        <Link to="/ToDo" class="text-decor">
          <div class="zoom">
            <h1 class="b1">
              To-Do list
              <hr />
            </h1>
          </div>
        </Link>
        <Link to="/clickerGame" class="text-decor">
          <div class="zoom">
            <h1 class="b1">
              Clicker Game
              <hr />
            </h1>
          </div>
        </Link>
        <Link to="/prevProjects" class="text-decor">
          <div class="zoom">
            <h1 class="b1">
              Previous Projects
              <hr />
            </h1>
          </div>
        </Link>
        <QuoteGenerator />
      </div>
    </router>
  );
}

export default Cards;
