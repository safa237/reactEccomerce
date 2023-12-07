import './About.css';
import video1 from './Images/1.mp4';
import banner from './Images/banner.png';
import a from './Images/a6.jpg';
import app from './Images/app.jpg';
import play from './Images/play.jpg';
import pay from './Images/pay.png';
function About (){
  return (
    
    <section id='abouts'>
      <section id="about-head" >
        <img src={a} alt="" />
        <div>
            <h2>who we are?</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui enim, deserunt amet distinctio ut laudantium voluptate eaque, cum quod quibusdam deleniti? Ducimus et obcaecati beatae minus deserunt facilis consequuntur neque.</p>
            <abbr title="">create stunning image with as more as title control as you like thanks to choice of basic.</abbr>
            <br></br>
            <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">
                create stunning image with as more as title control as you like thanks to choice of basic.
            </marquee>
        </div>
     </section>
     <section id="about-app">
        <h1>Download Our <a href="#">App</a></h1>
        <div className="video">
            <video autoplay muted loop src={video1}></video>
        </div>
    </section>
    <section id="newsletter" className=" ">
        <div className="newstext">
            <h4>Sign Up For Newsletter</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
        <div className="form">
            <input type="text" placeholder="Your email address"/>
            <button className="normal">Sign Up</button>
        </div>
    </section>

    <footer className="section-p1">
        <div className="col">
            <h4>Contact</h4>
            <p><strong>Address: </strong>562 wellington road , streat 32 , san francisco</p>
            <p><strong>phone:</strong> +01 2222 365/ (+91) 01 2345 6789</p>
            <p><strong>Hours: </strong>10:00 - 18:00 , Mon - Sat</p>
        </div>
        <div className="col">
            <h4>About</h4>
            <a href="#">About us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact us</a>
        </div>
        <div className="col install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="row">
                <img src={app} alt=""/>
                <img src={play} alt=""/>
            </div>
            <p>Secured Payment Gateways</p>
            <img src={pay} alt=""/>
       </div>

    </footer>

   </section>
    
  )
}
export default About;