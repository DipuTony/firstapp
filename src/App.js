import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

let myname = "Dipu Singh";
function App() {
  return (
   <>
    <Navbar title="TextUtils"/>
    <div className="container">
      <TextForm/>
    </div>
   </>
  );
}

export default App;
