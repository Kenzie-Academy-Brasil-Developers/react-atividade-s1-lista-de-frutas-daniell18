import "./App.css";
import { useState } from "react";
import "./components";
import Teste from "./components";
function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);
  return (
    <div className="App">
      <Teste fruits={fruits} setFruits={setFruits} />
    </div>
  );
}

export default App;
