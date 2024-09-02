import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {userContext} from "../utils/userContext"
import { useSelector } from "react-redux";

const Header = () => {
    const [loginBtnValue, setLoginBtnvalue] = useState("Login")
    const onlineStatus = useOnlineStatus();
    const userDetails = useContext(userContext);
    const cartItems = useSelector((state) => state.cart.items)

    return (
            <div className="flex justify-between bg-pink-100 shadow-lg">
                <div className="logo-container">
                    <img className="w-20 m-4 justify-between" alt="logo" src={LOGO_URL}/>
                </div>
                <div className="flex items-center">
                    <ul className="flex m-4 p-4">
                        <li className="px-4">Online status: {onlineStatus?"✅":"🔴"}</li>
                        <li className="px-4"> <Link to="/"> Home </Link> </li>
                        <li className="px-4"> <Link to="/about"> About Us </Link> </li>
                        <li className="px-4"> <Link to="/contact"> Contact Us </Link> </li>
                        
                        <li className="px-4 font-bold text-lg"> <Link to="/cart"> Cart ({cartItems.length}) </Link> </li>
                        <button className="login-btn px-4" onClick={() =>
                           loginBtnValue === "Login"?  setLoginBtnvalue("Logout") : setLoginBtnvalue("Login")
                        }>
                            {loginBtnValue}
                        </button>
                        <li className="px-4"> {userDetails.name} </li>
                    </ul>
                </div>
            </div>
        );
};

export default Header;