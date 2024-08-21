import { Link } from "react-router-dom";
import Logo from "./../assets/logo.svg";
import Navbar from "./Navbar";
import userIcon from "./../assets/user.svg";
import { FaOpencart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-white flex justify-between items-center px-8 py-4 ring-1 ring-slate-900/5">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <Navbar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}/>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuIsOpen((state) => !state)}
              className="block md:hidden ring-slate-900/30 ring-1 p-2 rounded-full transition-all duration-300 hover:ring-orange-400 hover:text-orange-400"
            >
              {menuIsOpen ? (
                <MdClose size={20} />
              ) : (
                <GiHamburgerMenu size={20} />
              )}
            </button>
            <Link to="/cart-page" className="ring-slate-900/30 ring-1 p-2 rounded-full transition-all duration-300 hover:ring-orange-400 hover:text-orange-400">
              <FaOpencart size={20} />
            </Link>
          </div>
          <Link to="/login" className="bg-orange-500 text-white flex justify-center items-center gap-2 w-32 h-12 rounded-full">
            <img src={userIcon} alt="user" className="w-4" />{" "}
            <span className="font-bold">Login</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
