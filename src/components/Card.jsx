import React from "react"
import food from "../images/food.png"

const Card = ({ image, text }) => {
  return (
    <div className=" flex flex-col   rounded-2xl justify-center items-center gap-5 md:h-[240px] h-[180px] w-[200px] p-4 bg-[#d9b648] md:w-[230px]">
      <img src={image} alt="" />
      <h1 className="text-[#563314] text-xl">{text}</h1>
    </div>
  )
}

export default Card
