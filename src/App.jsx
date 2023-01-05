import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./css/index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <h1 className="text-3xl font-bold underline bg-green-600">Hello world!</h1>
  );
}

export default App;
