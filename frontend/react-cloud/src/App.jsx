import React from "react";
import HomePage from "./HomePage";
import ServiceList from "./components/ServiceList";

function App() {
  return (
    <>
      <HomePage />
      <hr className="my-10" />
      <ServiceList />
    </>
  );
}

export default App;
