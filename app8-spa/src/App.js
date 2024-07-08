import logo from './logo.svg';
import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import PageNotFound from './Component/Hima_page';
import Hima_page from './Component/Hima_page';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
           <Route path="/**" element={<PageNotFound/>}/>
           */}
        </Routes>
      </Router>
      
      <Home/>
      <About/>
      <Contact/> 
       <Hima_page/>
      
      

    </div>
  );
}

export default App;
