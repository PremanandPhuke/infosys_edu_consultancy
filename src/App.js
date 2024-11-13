import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroComponent from './components/HeroComponent';
import About from './components/About';
import Products from './components/Products';
import Home from './components/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';



function App() {
  return (
   <Router>
     <div className='bg-gradient-to-r from-blue-500/75 to-purple-500/75  min-h-[100vh]'>

      <Routes>
        {/* Routs for all pages */}
        <Route path="/" element={<HeroComponent />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

      </Routes>
     </div>
   </Router>
  );
}

export default App;
