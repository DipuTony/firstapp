
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// let myname = "Dipu Singh";
function App() {
  const [mode, setMode] = useState('light'); //Wheter Dark mode is enable or not
  const [alert, setAlert] = useState(null); //Create state for alert and Default value is null.

  const ShowAlert = (message, type) =>{ //Object for store Message and Its Type.
    setAlert({   //Putting value in setAlert(state updater) to Access props.alert.type/message.
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  
  const toogelMode = () =>{ //create function for toogle dark/light mode
    if(mode=== 'light'){
      setMode('dark');
      ShowAlert("Light Mode Enabled", "success");
    }else{
      setMode('light');
      ShowAlert("Light Mode Disabled", "success");
    }
  }
  return (
   <>
   <Router>
    <Navbar title="TextUtils" mode={mode} toogelMode={toogelMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/" element={<TextForm/>} />      
        </Routes>
    </div>
    </Router>
   </>
  );
}

export default App;
