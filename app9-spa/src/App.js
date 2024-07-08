import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom'
import Users from './Components/Users';
import Navbar from './Components/Navbar';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/users" element={<Users/>} />
          <Route path="*" element ={<PageNotFound/> }/> 
        </Routes>
      </Router>

     
    </div>
  );
}

export default App;
