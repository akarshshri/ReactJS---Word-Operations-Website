//import logo from './logo.svg';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";


function App() {


  //Checking for Dark Mode
  const [mode, setmode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "#3F4544";
    } else {
      setmode('light');
      document.body.style.backgroundColor = "white";
    }
  }

  //Alert
  const [alert, setalert] = useState(null)
  const showAlert = (msg, type) => {
    //

    setalert({
      msg: msg,
      type: type
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);

  }

  //console.log(alert.type);

  return (
    <>
     {/* <Navbar title="String Operations" mode={mode} toggleMode={toggleMode} />
       <Alert alert={alert} />
      <About />
      <TextForm mode={mode} showAlert={showAlert} formInputTitle="Input Text Below" formOutputTitle="Result Below:" /> */}
      <Router>
        <Navbar title="String Operations" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} formInputTitle="Input Text Below" formOutputTitle="Result Below:" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
