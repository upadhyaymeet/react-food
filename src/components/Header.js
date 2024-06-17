import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
const [btnName, setBtnName] = useState("Login")
const onlineStatus = useOnlineStatus()

  return (
    <div className="header">
      <div className="nav-logo">
        <img
          src={LOGO_URL}
          alt="swiggy-logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>{onlineStatus ?"🟢":"🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><button onClick={()=>{
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
          }}>{btnName}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
