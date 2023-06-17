"use client";
import { useContext } from "react";
import { MenuContext } from "@/context/MenuContext";
import Link from "next/link";
import MainHeader from "./MainHeader";
import { AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { SiHelpscout } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { FaAngleRight, FaCheckDouble, FaCheck } from "react-icons/fa";

const MainLayout = ({ children }: any) => {
  const { open } = useContext(MenuContext);
  return (
    <div className="bg-gray-100 min-h-screen">
      <MainHeader />
      <div className="flex justify-start items-start">
        <aside
          className={`bg-white rounded-lg overflow-hidden transition-all duration-100 ${
            open ? "w-60 p-4" : "w-0"
          } lg:w-60 lg:p-4`}>
          <ul>
            <li className="flex justify-start items-center rounded-lg space-x-2 p-2 hover:bg-blue-400 hover:text-blue-800">
              <AiOutlineHome />
              <Link href="/">Home</Link>
            </li>
            <li className="flex justify-start items-center rounded-lg space-x-2 p-2 hover:bg-blue-400 hover:text-blue-800">
              <GrProjects />
              <div className="flex-1">Project</div>
              <FaAngleRight />
            </li>
            <li className="flex justify-start items-center rounded-lg space-x-2 p-2 hover:bg-blue-400 hover:text-blue-800">
              <FaCheck />
              <div className="flex-1">Singular</div>
              <FaAngleRight />
            </li>
            <li className="flex justify-start items-center rounded-lg space-x-2 p-2 hover:bg-blue-400 hover:text-blue-800">
              <FaCheckDouble />
              <div className="flex-1">Complex</div>
              <FaAngleRight />
            </li>
            <li className="flex justify-start items-center rounded-lg space-x-2 p-2 hover:bg-blue-400 hover:text-blue-800">
              <SiHelpscout />
              <Link href="/about-us">About us</Link>
            </li>
            <li className="flex justify-start items-center rounded-lg space-x-2 p-2 hover:bg-blue-400 hover:text-blue-800">
              <FiPhoneCall />
              <Link href="/contact-us">Contact us</Link>
            </li>
          </ul>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
