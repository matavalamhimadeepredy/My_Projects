import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
     <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="/About" element={<About/>}/>
      <Route path="Contact" element={<Contact/>}/>
     </Routes>
      </Router>
      {/* <Home/>
      <About/>
      <Contact/> */}
    </div>
  );
}

export default App;
