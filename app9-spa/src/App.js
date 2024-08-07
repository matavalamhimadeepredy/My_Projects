import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Users from './Components/Users';
import Navbar from './Components/Navbar';
import PageNotFound from './Components/PageNotFound';
import Protected_Route from './Components/Protected_Route';
import Login from './Components/login';
import UserDetails from './Components/UserDetails';
import Dashboard from './Components/Dashboard/Dashboard';






function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>

          <Route path="/users" element={<Protected_Route>
            <Users />
          </Protected_Route>} 
          />
          <Route path="/users/:id" element={<UserDetails/>}/>
         <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />


          <Route path="*" element={<PageNotFound />} />
          

        </Routes>
      </Router>


    </div>
  );
}

export default App
