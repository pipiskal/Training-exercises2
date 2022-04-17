import "./index.css";
import { useState, useEffect } from "react";
import FinalCard from "./components/card/Card";

// What i want as data in my app

const tags = ["Top", "Near You", "Sports", "Aww"];

function App() {
  return <FinalCard tags={tags} />;
}

export default App;
