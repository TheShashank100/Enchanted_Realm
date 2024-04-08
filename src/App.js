import "./styles.css";
import Title from "../Enchanted_Realm/Title";
import "../Cards/Calc.css";
import Navigate from "../Enchanted_Realm/Navigate";

export default function App() {
  return (
    <div className="App">
      <Title />
      <Navigate />
      <style>{"body { background-color: black; }"}</style>
    </div>
  );
}
