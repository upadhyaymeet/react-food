import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
const [btnName, setBtnName] = useState("Login")
const onlineStatus = useOnlineStatus()

  return (
    <div className="p-2 flex justify-around w-screen bg-orange-500">
      <div className="">
        <img
        className="w-44"
          src={LOGO_URL}
          alt="swiggy-logo"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex gap-5 text-lg text-white">
          <li>Online:{onlineStatus ?"🟢":"🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><button className="px-5 text-orange-500 bg-white font-bold rounded-lg"  onClick={()=>{
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
          }}>{btnName}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
