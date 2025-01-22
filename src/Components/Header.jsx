import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    setIsLoggedOut(true);
    setIsMenuOpen(false);
  };

  const handleCreateAccount = () => {
    setShowLoginForm(true);
  };

  return (
    <div>
      <header className="flex items-center justify-between px-6 py-3 bg-white border-b">
        <div className="hidden md:flex md:w-[334px] md:h-[38px] items-center border-2 border-primary hover:border-green-500 duration-300 rounded-[4px] px-3 py-1">
          <CiSearch className="text-primary mr-1 size-[18px]" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none text-[13px] px-[11px] py-[7px]"
          />
          <span className="text-primary rounded-[2px] bg-primary/15 ml-16 size-[18px] flex items-center justify-center font-medium">
            ⌘
          </span>
          <span className="text-primary rounded-[2px] bg-primary/15 ml-2 size-[18px] flex items-center justify-center font-medium">
            F
          </span>
        </div>

        <div className="flex items-center space-x-5">
          {!isLoggedOut && (
            <button className="border border-[#E7EAE9] size-[32px] rounded">
              <Box sx={{ color: "action.active" }}>
                <Badge color="error" variant="dot">
                  <IoNotificationsOutline />
                </Badge>
              </Box>
            </button>
          )}

          <div className="relative">
            {!isLoggedOut ? (
              <div
                className="flex items-center space-x-4 cursor-pointer"
                onClick={toggleMenu}
              >
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <p className="text-[13px] font-medium flex items-center gap-2 hover:scale-105 duration-150">
                  Harsh <IoChevronDownOutline className="size-[14px]" />
                </p>
              </div>
            ) : (
              <p
                className="text-[13px] font-medium flex items-center gap-2 cursor-pointer hover:scale-105 duration-150"
                onClick={handleCreateAccount}
              >
                Create Account
              </p>
            )}

            {isMenuOpen && !isLoggedOut && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Settings
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>

      {showLoginForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800/35 z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => setShowLoginForm(false)}
                  className="text-sm text-gray-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
