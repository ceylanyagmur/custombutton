import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        marginTop: 250,
        marginLeft: 450,
        width: "50%",
      }}
    >
      <Button color="blue">Default button</Button>
      <Button color="red">Default button</Button>
      <Button color="purple">Default button</Button>
    </div>
  );
}

export default App;
