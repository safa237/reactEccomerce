import a from './Images/a6.jpg';
import app from './Images/app.jpg';
import play from './Images/play.jpg';
import pay from './Images/pay.png';
import logo from './Images/logo.png';
import p1 from './Images/1.png';
import p2 from './Images/2.png';
import p3 from './Images/3.png';
import Button from 'react-bootstrap/Button';
import './Contact.css';
function Contact (){
    return (
        <section id='contacts'>
    <section id="page-header" className="about-header">
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE,We love to hear from you </p>
    </section>

    <section id="contact-details"  >
        <div className=" details">
            <h2>visit one of our agency locations or contact us today</h2>
            <h3>Head Office</h3>
            <div>
                <li>
                    <i className="fa-regular fa-map"></i>
                    <p>56 Glassford street glasgow G1 1UL New york</p>
                </li>
                <li>
                    <i className="fa-regular fa-envelope"></i>
                    <p>contact@example.com</p>
                </li>
                <li>
                    <i className="fa-solid fa-phone"></i>
                    <p>contact@example.com</p>
                </li>
                <li>
                    <i className="fa-regular fa-clock"></i>
                    <p>Monday to Saturday 9.00am to 16pm</p>
                </li>
            </div>
        </div>
        <div className=" map">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.5962409315584!2d-1.25804192373284!3d51.75870629231411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a85ae1ca65%3A0x2b1bc402e55d6557!2sOxford%20University%20Museum%20of%20Natural%20History!5e0!3m2!1sen!2seg!4v1691438968998!5m2!1sen!2seg"
    width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>
    </section>

    <section id="form-datails">
        <form action="">
            <span>LEAVE A MESSAGE</span>
            <h2>we love to hear from you</h2>
            <input type="text" placeholder="your name"/>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Subject"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="your message"></textarea>
            <Button
                    color="primary"
                    className="mr-3"
                  >
                    submit
                  </Button>
        </form>

        <div className="people">
            <div>
            <img src={p1} alt=""/>
                <p><span>John Doe</span>Senior Marketing Manager<br/>
                Email : John@email.com </p>
            </div>
            <div>
            <img src={p2} alt=""/>
                <p><span>William Smith</span>Senior Marketing Manager<br/>
                Email : William@email.com </p>
            </div>
            <div>
            <img src={p3} alt=""/>
                <p><span>Emma stone</span>Senior Marketing Manager<br/>
                Email : Emma@email.com </p>
            </div>
        </div>
    </section>

    <section id="newsletter" class="section-p1 section-m1">
        <div className="newstext">
            <h4>Sign Up For Newsletter</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
        <div className="form">
            <input type="text" placeholder="Your email address"/>
            <button className="normal">Sign Up</button>
        </div>
    </section>

    <footer className='section-p1' >
        <div className="col ">
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
        <div className="col">
            <h4>My Account</h4>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
        </div>
        <div className="col install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div class="row">
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
export default Contact;

