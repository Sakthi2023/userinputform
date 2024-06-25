import { useState } from "react";
import "./App.css";

function App() {
  const [Inputname, setInputName] = useState("Priya");
  const [names, setNames] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setNames(Inputname);
  };
  return (
    <div>
      <form>
        <label>
          Name:
          <input
            type="text"
            onChange={(e) => {
              setInputName(e.target.value);
            }}
          />
        </label>
        <button onClick={handleClick} type="submit">
          Submit
        </button>
      </form>
      <h2>Hello! {names}</h2>
    </div>
  );
}

export default App;
