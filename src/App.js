//import logo from './logo.svg';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';

function App() {
  return(
  <>
    <Navbar title="String Operations" />
    <TextForm formInputTitle="Input Text Below" formOutputTitle="Result Below:" />
  </>
  )
}

export default App;
