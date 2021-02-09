import React, { useEffect } from "react";
import HomePage from "./HomePage/HomePage";
import axios from "axios";

function App() {
  const url = "http://localhost:3001";
  const getToAPI = () => {
    axios
      .get(`${url}/api/v1/items`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getToAPI();
  }, []);

  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
