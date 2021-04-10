
function Footer() {
    return (
        <div className="footer-content">
           <div className="privacy-and-terms">
               <h4>PRIVACY POLICY</h4>
               <h4>TERMS AND CONDITIONS</h4>
           </div>
           <div className="subscribe">
               <h5>course insights for best developers</h5>
               <h5>direct to your inbox</h5>
               <form action="#" className="subscribe-form">
                   <input id="subscribe-input" type="text" name="email" placeholder="your email: "/>
                   <button id="subscribe-btn" type="submit">subscribe</button>
               </form>
           </div>
           <div className="contact-us-container">
               <div className="follow-us">
                   <h5>follow us</h5>
                   <div className="brand-icons">
                       <a href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i> </a>
                       <a href="#"><i className="fab fa-twitter" aria-hidden="true"></i> </a>
                       <a href="#"><i className="fab fa-google" aria-hidden="true"></i> </a>
                       <a href="#"><i className="fab fa-pinterest" aria-hidden="true"></i> </a>
                       <a href="#"><i className="fab fa-instagram" aria-hidden="true"></i> </a>
                   </div>
               </div>
               <div className="contact-us">
                   <h5>contact us</h5>
                   <h5>courses.support@mail.com</h5>
               </div>

           </div>
        </div>
    );

}


ReactDOM.render(<Footer />, document.getElementById("ftr"));
