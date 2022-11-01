import { useState } from "react";
import "./App.css";
import image8b from "./assets/images/cookie8.jpg";

function about() {
  return (
    <div className="container">
      <div className="abtpage">
        <div>
          <img src={image8b} alt="" />
        </div>

        <div className="aboutus">
          <div className="aboutustext">
          <span className="abt">About Us</span> <br />
          Flour most cookie recipe call for all-purpose or pastry flour .if
          <br />
          you use bread flour with its high glutten protein content or cake{" "}
          <br />
          flour which is high in starch them.
          </div>
            <div className="CC">
              2500+
              <br />
              CLOTH COLLECTION
            </div>
            <div className="HC">
              5000+
              <br />
              HAPPY CUSTOMERS
            </div>
            <div className="MS">
              1M+
              <br />
              MONTHLY SALES
            </div>
        </div>
        
      </div>
      <footer className="GIT">
        <div className="GIT1">
      Feyi-Ade.com
        </div>
        <div className="span2"> 
          <div className="GIT2">
      Get in touch 
        </div>
        <span className="contactus">Contact us</span>
        <div className="list"> 
          <div className="list1">
      Features <br/>picking<br/>Login<br/>Signup<br/>
        </div>
        <div className="list2">
          Term of use <br/> Privacy Policy<br/>Legal Notice
        </div>
        <div className="list3">
          Feedback<br/>Privacy Policy<br/>Legal Notice<br/>
        </div>
        </div>
        </div>
        
       
      </footer>
    </div>
  );
}

export default about;
