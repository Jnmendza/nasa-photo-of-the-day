import React from "react";
import "./App.css";
import Apod from './components/Apod'

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Apod />
    </div>
  );
}

export default App;
