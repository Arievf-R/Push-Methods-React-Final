import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import logo from "../assets/page6.png";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user.email)

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/" className="ml-4">
        <img
          src={logo}
          alt="Netflix logo with red text on a white background"
          className="cursor-pointer h-15"
        />
      </Link>
      <div className="flex mx-auto space-x-6">
        <Link to="/" className="text-white hover:text-red-600">
          Home
        </Link>
        <Link to="/about" className="text-white hover:text-red-600">
          About
        </Link>
        <Link to="/movies" className="text-white hover:text-red-600">
          Movies
        </Link>
        <Link to="/contact" className="text-white hover:text-red-600">
          Contact
        </Link>
      </div>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="pr-4 text-white">Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className="px-6 py-2 text-white bg-red-600 rounded cursor-pointer"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="pr-6 text-white rounded-lg cursor-pointer">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-6 py-2 text-white bg-red-600 rounded-lg cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
