

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../components/constants/data.js";
import { menu, close } from "../assets";
import logo123 from "../assets/logo123.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary opacity-90`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={"/"}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-2"
        >
          <img
            src={logo123}
            alt="logo"
            className="w-72 h-9 object-contain"
          />
          
        </Link>
        <div className="hidden sm:flex gap-10">
          {navLinks.map((links) => (
            <a
              href={`#${links.id}`}
              className={`${
                active === links.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(links.title)}
              key={links.id}
            >
              {links.title}
            </a>
          ))}
        </div>
        <img
          className="sm:hidden w-[28px] h-[28px] object-contain cursor-pointer"
          src={toggle ? close : menu}
          onClick={() => setToggle(!toggle)}
        />
      </div>
      {toggle && (
        <div className="sm:hidden absolute top-20 right-0 mx-4 my-2">
          <ul className="list-none items-start bg-black p-6 rounded-xl">
            {navLinks.map((links) => (
              <li
                className={`${
                  active === links.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer mb-3`}
                onClick={() => setActive(links.title)}
                key={links.id}
              >
                <a href={`#${links.id}`}>{links.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
