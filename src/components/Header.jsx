import React from "react";
import Button from "./ui/Button";
import Tablink from "./ui/Tablink";
import logo from "../assets/images/logo.png";
import { FaBars } from "react-icons/fa6";
import AnimButton from "./ui/AnimButton";


export default function Header() {
  return (
    <header className="flex flex-row items-center gap-x-3 justify-between w-full    pr-28 ">
      <div className=" bg-black pl-28 w-3/5">
        <img src={logo} alt="" className="w-3xs h-28  object-cover" />
      </div>

      <div className="bg-white flex flex-row gap-x-3 justify-end tablet:justify-between items-center w-4/5">
        <nav>
          <div className="hidden gap-x-8 flex-row items-center  tablet:flex">
            <Tablink text="Home" path="/home" />
            <Tablink text="About" path="/about" />
            <Tablink text="Booking" path="/booking" />
            <Tablink text="Cars" path="/cars" />
            <Tablink text="Contact" path="/contact" />
          </div>
        </nav>
        <button className="text-3xl block tablet:hidden relative
          z-50
          cursor-pointer
          duration-300
           before:absolute
           before:-z-10
           before:hidden
           hover:before:block
           before:h-full before:w-full before:rounded-full
          hover:before:w-full
  hover:before:transition-all
  hover:before:duration-300
    before:top-0
    before:left-0
    before:bg-black 
    p-2
    before:opacity-30">
          <FaBars className=" "/>
        </button>

<AnimButton text="login/sign up" properties="bg-black"/>

       
      </div>
    </header>
  );
}
