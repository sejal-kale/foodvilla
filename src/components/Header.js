import { useState, useContext } from "react";
import { Login } from "./Login";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";




const Title = () => (
  <a href="/">
    <img className="h-24 p-2" alt="logo" src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4" />
  </a>
);

const Header = () => {

  const user = useContext(UserContext)

  const cartItems = useSelector(store => store.cart.items)

  console.log(cartItems)


  const token = localStorage.getItem("token");

  const [isLoggedin, setIsLoggedin] = useState(
    token?.length === 100 ? true : false
  );
  const navigate = useNavigate();

  return (
    <div className="flex  justify-between bg-orange-400 shadow-lg">
      <Title />

      <div className="nav-items ">
        <ul className="flex py-10 text-xl p-3  ">
          <Link to="/"><li className="px-3 text-white hover:text-black">Home</li></Link>
          <Link to="/about"><li className="px-3 text-white hover:text-black ">About</li></Link>
          <Link to="/contact"><li className="px-3 text-white  hover:text-black">Contact</li></Link>
          <Link to="/instamart"><li className="px-3 text-white hover:text-black">Instamart</li></Link>
          <Link to="/cart"><li className="px-3  text-white hover:text-black">cart-{cartItems.length}</li></Link>
        </ul>
      </div>
      {/* <h1 className="text-xl p-10 text-white">{user.name}</h1> */}
      {isLoggedin ? (
        <button
          className=""
          onClick={() => {
            localStorage.clear();
            setIsLoggedin(!isLoggedin);
          }}
        >
          Logout
        </button>
      ) : (
        <Link to="/login"><button className="login-btn p-2 relative top-5 m-2 text-white border-2">
          Login
        </button>
        </Link>
      )}

    </div>
  );
};
export default Header;