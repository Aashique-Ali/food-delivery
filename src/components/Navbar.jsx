import React, { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { NavLink } from "react-router-dom"
import foodLogo from "../images/foodLogo.png"
import { IoSearch } from "react-icons/io5"
import { HiShoppingCart } from "react-icons/hi"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  return (
    <div className=" flex justify-between items-center md:px-28 px-10 md:pt-10 pt-6 pb-5 ">
      <div>
        <img src={foodLogo} alt="" />
      </div>
      <div>
        <ul className="hidden text-xl md:flex justify-center items-center text-black gap-10 text-[18px] ">
          <NavLink>
            <li>Home</li>
          </NavLink>
          <NavLink>
            <li>Menu</li>
          </NavLink>
          <NavLink>
            <li>Services</li>
          </NavLink>
          <NavLink>
            <li>Delivery</li>
          </NavLink>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-5">
        <div className="bg-black rounded-full p-3">
          <IoSearch size={20} color="white" />
        </div>
        <div className="bg-black rounded-full p-3">
          <HiShoppingCart size={20} color="white" />
        </div>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="block md:hidden cursor-pointer text-black"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <ul
        className={
          nav
            ? "fixed md:hidden bg-[#ffd755] right-0 top-[15%] w-[60%] h-full bg-primary ease-in-out duration-500"
            : "w-[60%] fixed bg-[#ffd755] top-[10%] bottom-0 right-[-100%] ease-in-out duration-500"
        }
      >
        <li className="p-4 hover:bg-black rounded-xl m-2 cursor-pointer duration-300 hover:text-white text-black">
          <NavLink>Home</NavLink>
        </li>
        <li className="p-4 hover:bg-black rounded-xl m-2 cursor-pointer duration-300 hover:text-white text-black">
          <NavLink>Menu</NavLink>
        </li>
        <li className="p-4 hover:bg-black rounded-xl m-2 cursor-pointer duration-300 hover:text-white text-black">
          <NavLink>Services</NavLink>
        </li>

        <li className="p-4 hover:bg-black rounded-xl m-2 cursor-pointer duration-300 hover:text-white text-black">
          <NavLink>Delivery</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
