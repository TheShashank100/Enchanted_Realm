import { Route, Routes } from "react-router-dom";
import Calc from "../Cards/Calc";
import IQ from "../Cards/IQ";
import NotFound from "./NotFound";
import ToDo from "../Cards/ToDo";
import ClickerGame from "../Cards/clickerGame";
import PrevProjects from "../Cards/prevProjects";
import "../Cards/Calc.css";
import MainContent from "./MainContent";
import SignUp from "../Login/SignUp.jsx";
import LigtningAnimation from "./LightningAnimation";
import Profile from "../Login/Profile.jsx";
import IQtest from "../Cards/IQtest";
import IQ2 from "../Cards/IQ2";
import IQ3 from "../Cards/IQ3";
import IQ1 from "../Cards/IQ1";
import IQ10 from "../Cards/IQ10";
import IQ20 from "../Cards/IQ20";
import IQ30 from "../Cards/IQ30";
import Login from "../Login/login";
import ForgotPassword from "../Login/ForgotPassword";

function Navigate() {
  return (
    <router>
      <div className="App">
        <Routes>
          <Route path="/log" element={<SignUp />} />
          <Route path="/" element={<MainContent />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/animate" element={<LigtningAnimation />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/IQ" element={<IQ />} />
          <Route path="/IQtest" element={<IQtest />} />
          <Route path="/IQ1" element={<IQ1 />} />
          <Route path="/IQ10" element={<IQ10 />} />
          <Route path="/IQ2" element={<IQ2 />} />
          <Route path="/IQ20" element={<IQ20 />} />
          <Route path="/IQ3" element={<IQ3 />} />
          <Route path="/IQ30" element={<IQ30 />} />
          <Route path="/Calc" element={<Calc />} />
          <Route path="/ToDo" element={<ToDo />} />
          <Route path="/ClickerGame" element={<ClickerGame />} />
          <Route path="/PrevProjects" element={<PrevProjects />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </router>
  );
}

export default Navigate;
