import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterComponent from './Components/Registeration.js'
import LoginComponent from './Components/Login.js'
import Footer from './Components/Footer.js'
import Home from './Components/Home.js'
import { BrowserRouter as Router,  Routes, Route, Link } from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/login" element={<LoginComponent />} />
      </Routes>
    </Router>
    
  );
}
export default App;
