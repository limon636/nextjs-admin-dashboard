"use client";
import { MenuContext } from "@/context/MenuContext";
import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
const MainHeader = () => {
  const { open, toggle } = useContext(MenuContext);
  const [userOpen, setUserOpen] = useState(false);
  return (
    <>
      <div className="bg-white flex justify-between items-center h-12 px-4 mb-4">
        <div>Brand</div>
        <div className="flex items-center gap-4">
          <div onClick={toggle} className="cursor-pointer lg:hidden">
            <FaBars className={`${open && "hidden"}`} />
            <AiOutlineClose className={`${!open && "hidden"}`} />
          </div>
          <div className="flex flex-col justify-center items-center relative z-30">
            <FaUserCircle
              className="cursor-pointer h-6 w-6"
              onClick={() => setUserOpen(!userOpen)}
            />

            <ul
              className={`flex flex-col bg-white w-48 my-0 rounded-lg transition-all duration-200 overflow-hidden absolute top-10 right-0 ${
                userOpen ? "opacity-100 h-auto" : "opacity-0 h-0"
              }`}>
              <li className="w-full flex flex-col items-center cursor-pointer hover:bg-orange-200 py-2">
                Profile
              </li>
              <li className="w-full flex flex-col items-center cursor-pointer hover:bg-orange-200 py-2">
                Theme
              </li>
              <li className="w-full flex flex-col items-center cursor-pointer hover:bg-orange-200 py-2">
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        onClick={() => setUserOpen(false)}
        className={`bg-gray-100 fixed inset-0 opacity-50 z-0 ${
          userOpen ? "block" : "hidden"
        }`}></div>
    </>
  );
};

export default MainHeader;
