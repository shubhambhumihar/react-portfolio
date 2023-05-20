import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Header() {
  const [showMenu, setShowMenu] = useState("md:hidden");
  const menuItems = [
    {
      title: "Home",
      key: "/", // routes
    },
    {
      title: "Projects",
      key: "/projects",
    },
    {
      title: "Blogs",
      key: "/courses",
    },
    {
      title: "Contact",
      key: "/contact",
    },
  ];

  const pathname = window.location.pathname;
  return (
    <div className="text-white font-mont fixed top-0 left-0 right-0 z-50">
      <div
        className={`flex justify-between items-center shadow-2xl  p-5 bg-theme ${
          showMenu === "" && "md:flex-col"
        } `}
      >
        <div className="flex justify-between items-center  w-full ">
          <h1 className="text-4xl font-semibold hover:text-orange-700">
            SHUBHAM💖
          </h1>

          <FaBars
            onClick={() => {
              if (showMenu === "md:hidden") {
                setShowMenu("");
              } else {
                setShowMenu("md:hidden");
              }
            }}
            className="lg:hidden xl:hidden 2xl:hidden md:flex cursor-pointer"
          />
        </div>

        <div className="flex md:hidden ">
          {menuItems.map((item) => {
            return (
              <li
                className={`list-none mx-5 p-1 ${
                  item.key === pathname && "bg-white text-black rounded-md"
                } `}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>

        <div
          className={` mt-5flex flex-col items-start w-full md:flex lg:hidden xl:hidden 2xl:hidden ${showMenu}`}
        >
          {menuItems.map((item) => {
            return (
              <li
                className={`list-none my-2 p-1 ${
                  item.key === pathname && "bg-white text-black rounded-md"
                }`}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
