import Navbar from "./components/Navbar";
import TextFrom from "./components/TextForm";
import About from "./components/About";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = React.useState("light");
  const [color, setColor] = React.useState("black");
  const [btnColor, setbtnColor] = React.useState("outline-info");

  const toggleDarkMode = () => {
    if (mode !== "dark") {
      setMode("dark");
      setColor("white");
      setbtnColor("secondary");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      setColor("black");
      setbtnColor("outline-info");
      document.body.style.backgroundColor = "white";
    }
  };

  const toggleRedMode = () => {
    if (mode !== "red") {
      setMode("red");
      setColor("white");
      setbtnColor("danger");
      document.body.style.backgroundColor = "#850000";
    } else {
      setMode("light");
      setColor("black");
      setbtnColor("outline-info");
      document.body.style.backgroundColor = "white";
    }
  };

  const toggleBlueMode = () => {
    if (mode !== "blue") {
      setMode("blue");
      setColor("white");
      setbtnColor("primary");
      document.body.style.backgroundColor = "#146C94";
    } else {
      setMode("light");
      setColor("black");
      setbtnColor("outline-info");
      document.body.style.backgroundColor = "white";
    }
  };

  const toggleGreenMode = () => {
    if (mode !== "green") {
      setMode("green");
      setColor("white");
      setbtnColor("success");
      document.body.style.backgroundColor = "#82CD47";
    } else {
      setMode("light");
      setColor("black");
      setbtnColor("outline-info");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <BrowserRouter>
      <Navbar
        mode={mode}
        handleDardMode={toggleDarkMode}
        handleRedMode={toggleRedMode}
        handleBlueMode={toggleBlueMode}
        handleGreenMode={toggleGreenMode}
      />
      <Routes>
        <Route
          path="/"
          element={
            <TextFrom
              mode={mode}
              heading="Play with your text here"
              color={color}
              btnColor={btnColor}
            />
          }
        />
        <Route
          path="/"
          element={
            <TextFrom
              mode={mode}
              heading="Play with your text here"
              color={color}
              btnColor={btnColor}
            />
          }
        />
        <Route path="/about" element={<About color={color} mode={mode} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
