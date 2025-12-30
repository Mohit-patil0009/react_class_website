import { User } from "lucide-react";
import { Search } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import "./Headercss.css";

function Header() {
  return (
    <div className="headercontainer">
      <div className="logo">
        <img src="https://urbantribe.in/cdn/shop/files/URBAN_TRIBE_-_BRAND_LOGO1.png?v=1736495656&width=360" alt="urban tribe logo" />
      </div>
      <div className="Headername">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Information</a>
      </div>
      <div className="headericon">
        <div className="contacticon">
            <a href="#"><User /></a>
        </div>
        <div className="contacticon">
            <a href="#"><Search /></a>
        </div>
        <div className="contacticon">
            <a href="#"><BriefcaseBusiness /></a>
        </div>
      </div>
    </div>
    
  );
}

export default Header;