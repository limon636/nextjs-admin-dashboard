"use client";
import { MenuContext } from "@/context/MenuContext";
import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
const MainHeader = () => {
  const { open, toggle } = useContext(MenuContext);
  return (
    <div className="bg-white flex justify-between items-center h-12 px-4 mb-4">
      <div>Brand</div>
      <div onClick={toggle} className="lg:hidden">
        <FaBars className={`cursor-pointer ${open && "hidden"}`} />
        <AiOutlineClose className={`cursor-pointer ${!open && "hidden"}`} />
      </div>
    </div>
  );
};

export default MainHeader;
