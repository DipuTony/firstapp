import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

let myname = "Dipu Singh";
function App() {
  const [mode, setMode] = useState('light'); //Wheter Dark mode is enable or not
  //create function for toogle dark/light mode
  const toogelMode = () =>{
    if(mode=== 'light'){
      setMode('dark');
      // console.log(mode);
    }else{
      setMode('light');
      // console.log(mode);
    }
  }
  return (
   <>
    <Navbar title="TextUtils" mode={mode} toogelMode={toogelMode}/>
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze." />
      <About/>
    </div>
   </>
  );
}

export default App;
