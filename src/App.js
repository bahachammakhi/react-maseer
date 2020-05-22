import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import Card from "./components/Card";
import "./App.css";
import axios from "axios";

function App() {
  const [color, setColor] = useState(false);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const reactblue = "Learn react aman";
  const reactgreen = "Learn react Naambouk";
  console.log(color);
  useEffect(() => {
    console.log("mounted");
    axios.get("https://swapi.dev/api/people").then((data) => {
      setData(data.data.results);
    });
  }, []);

  const view = data.map((element, i) => {
    return (
      <Card
        key={i}
        color={i % 2 === 0 ? "blue" : "green"}
        name={element.name}
        age={element.age}
        hair_color={element.hair_color}
      />
    );
  });
  return (
    <div style={{ backgroundColor: color ? "blue" : "pink" }} className="App">
      <div style={{ display: "flex" }}>
        <h1>name : </h1>
        <input name="name" onChange={(e) => setName(e.target.value)} />
      </div>
      <h1>{name}</h1>
      {view}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={() => {
            setColor(!color);
            setData(data.reverse());
          }}
        >
          Change color
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {color ? reactblue : reactgreen}
        </a>
      </header>
    </div>
  );
}

export default App;
