import {useState} from "react";
import "./App.css";


import defImage from "./assets/images/cookie1.jpg";
import image from "./assets/images/cookie11.jpg";
import image8 from "./assets/images/cookie8.jpg";
import image14 from "./assets/images/cookie14.jpg";
import image7 from "./assets/images/cookie7.jpg";
import image16 from "./assets/images/cookie16.jpg";
import image13 from "./assets/images/cookie13.jpg";

function Home (){
    
    return (
        <div className="containerhome">
        

      <section>
        <div className="body">
          <div className="branddes">
            <div>
              <h1>
                <span className="bit">Best in town </span>
                <br />
                <span className="text">
                  Delicious Homemade
                  <br />
                  Cookie Recipie
                </span>
              </h1>
              <span className="text2">
                The name cookies is derived from the latin Dutch word koekje,
                <br />
                meaning "small or little cake".Buscuit comes from the latin
                <br /> word bis coctum,which means "Twice baked".
              </span>{" "}
              <br />
              <button className="menubut">EXPLORE OUR MENU</button>
            </div>
          </div>
          <div>
            <img src={defImage} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="layout1">
          <div className="grid1">
            <h1>About Quality</h1>
            Unpacked endeavor six steerpest had <br />
            Husband her. Painted no or affixied it
            <br /> so civily
          </div>
          <div className="grid2">
            <img src={image14} alt="" />
          </div>
          <div className="grid3">
            <img src={image8} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="newslet">
          <h1>Subscribe To Newsletter</h1>
          <form>
            <input
              type="text"
              className="email"
              placeholder="Enter your email address"
            />
          </form>
        </div>
      </section>
      <section className="orderdiv">
        <div className="order">
          NEW FLAVOUR
          <br />
          COOKIES MASTER
          <button className="orderbut">ORDER NOW</button>
        </div>

        <div>
          <img src={image7} alt="" />
        </div>
      </section>
      <section className="newimp">
        <div className="textimp">
          NOW IMPROVING <br />
          Wakefield chopped up a nestle semi-sweet chocolate <br />
          bar and added the chop.
        </div>
        <div>
          <img src={image16} alt="" />
        </div>
      </section>
      <section className="pastry">
        <div>
          <img src={image13} alt="" />
        </div>
        <div className="textpastry">PASTRY FLOUR</div>
      </section>
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
    )
}
export default Home;