import "./Footercss.css"; 
function Footer(){
    return (
        <div className="footer">
            <h3>NEWSLETTER SIGNUP</h3>
            <h4>Subscribe to our email and be the first to know about our special offers! In addition, we will give you a 15% discount on the next order after registration.</h4>
            <div className="email">
                <a href="#">Email :-</a>
                <h5 className="EmialBox">
                    <input type="text" placeholder="Enter your Email" />
                </h5>
            </div>
        </div>
    );
}

export default Footer;