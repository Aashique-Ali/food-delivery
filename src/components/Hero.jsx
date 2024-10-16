import React from "react"
import Button from "./Button"
import foodHero from "../images/foodHero.png"
import { FaArrowRight } from "react-icons/fa6"

const Hero = () => {
  return (
    <div className="flex justify-between md:items-end items-start md:px-28 px-10 pb-10">
      <div className="flex justify-center items-start flex-col md:gap-5 gap-2">
        <Button text={"Feast Your Senses"} />
        <div className="flex justify-start items-start md:text-5xl text-xl gap-2 flex-col">
          <span> Bon Appétit:</span>
          <span className="text-green-400">Explore Culinary</span>
          <span>Creations</span>
        </div>
        <p className="md:text-sm md:w-[400px] w-[200px] text-[10px] ">
          Your ultimate destination for all things food! Explore our extensive
          collection.of mouthwatenng recipes.
        </p>
        <div className="flex flex-col md:flex-row items-start justify-center md:items-center gap-5">
          <Button text={"Order Now"} content={<FaArrowRight />} />
          <Button
            text={"Watched Demo"}
            content={<FaArrowRight />}
            color="text-green-500"
          />
        </div>
      </div>
      <div>
        <img src={foodHero} alt="" className="w-[550px] " />
      </div>
    </div>
  )
}

export default Hero
