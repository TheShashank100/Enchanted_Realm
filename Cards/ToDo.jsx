import { Link } from "react-router-dom";

function ToDo() {
  return (
    <div>
      <div class="center">
        <Link to="/" class="text-decor">
          <div class="zoom1">
            <h1 id="color">To-do</h1>
          </div>
        </Link>
      </div>
      <div class="center">
        <h2 id="ToDoTitle">Make a list today</h2>
      </div>
    </div>
  );
}
export default ToDo;
