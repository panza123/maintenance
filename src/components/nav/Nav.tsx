import { NavLink } from "react-router-dom";
import { navbar } from ".";
import logo from "../../assets/images/maintenance-logo-icon_617585-1962.avif";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

function Nav() {
  // State to manage the mobile menu toggle
  const [open, setOpen] = useState<boolean>(false);

  // Function to toggle the mobile menu
  const toggleNav = () => {
    setOpen(!open);
  };

  // Function to close the mobile menu when a link is clicked
  const closeNav = () => {
    setOpen(false);
  };

  return (
    <header className="w-full h-[100px] flex justify-between items-center px-5 md:px-10 bg-blue-300 py-3">
      {/* Logo */}
      <img
        src={logo}
        alt="Maintenance Logo"
        className="w-10 h-10 rounded-full object-cover"
      />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-10 text-white">
        <ul className="flex gap-10">
          {navbar.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "text-black hover:text-blue-400"
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Toggle Button for Mobile Navigation */}
      <div
        className={`md:hidden text-white cursor-pointer transition-transform ${
          open ? "rotate-180" : "rotate-0"
        }`}
        onClick={toggleNav}
      >
        {!open ? <IoMenu size={40} /> : <RxCross1 size={40} />}
      </div>

      {/* Mobile Navigation Menu */}
      {open && (
        <nav className="absolute top-[100px] left-0 flex flex-col justify-center  items-center bg-blue-300 w-full py-3 z-50">
          <ul className="flex flex-col items-center justify-center gap-5">
            {navbar.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-400 font-semibold"
                      : "text-black hover:text-blue-500"
                  }
                  onClick={closeNav} // Close the menu when a link is clicked
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Nav;
