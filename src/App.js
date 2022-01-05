//import logo from './logo.svg';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import './App.css';
import React, { useState } from 'react'


function App() {

  const [mode, setmode] = useState('light')

  const toggleMode = () => {
      if (mode === 'light'){
        setmode('dark');
        document.body.style.backgroundColor = "#3F4544";

      }else{
        setmode('light');
        document.body.style.backgroundColor = "white";
      }
  }

  return (
    <>
      <Navbar title="String Operations" mode={mode} toggleMode={toggleMode} />
      <TextForm mode={mode} formInputTitle="Input Text Below" formOutputTitle="Result Below:" />
      {/* <About /> */}
    </>
  )
}

export default App;
