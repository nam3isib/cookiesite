import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router ,Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./about";
import Testimonial from "./testimonial";
import Login from "./login";
import Register from "./register";



function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} exact />
      <Route path='/about' element={<About/>} exact />
      <Route path='/testimonial' element={<Testimonial/>} exact />
      <Route path='/login' element={<Login/>} exact />
      <Route path='/register' element={<Register/>} exact />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
