import { useState } from "react";
import "./App.css";

function Navbar() {
    return (
        <nav className="nav">
                <section>
        
          <div className="header">
            <h1>
              Feyi-<span className="ade">Ade</span>
            </h1>
          
          
          <div className="home">
            <a href="/"><h3>Home</h3></a>
          </div>
          <div className="about">
            <a href="/about"><h3>About</h3></a>
          </div>
          <div className="testimonial">
            <a href="/testimonial"><h3>Testimonial</h3></a>
          </div>
          <div className="login">
            <a href="/login"><h3>LOG IN</h3></a>
          </div>
          <div className="register">
            <a href="/register"><h3>REGISTER</h3></a>
          </div>

          
          </div>
      </section>
            
        </nav>
    );
}

export default Navbar;