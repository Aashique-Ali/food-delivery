import React from "react"
import food from "../images/food.png"
import tree from "../images/tree.png"
import Card from "./Card"

const Categories = () => {
  return (
    <div className=" text-center pt-5">
      <h1 className="text-5xl pb-10">Top Categories</h1>
      <div className="flex justify-between items-center gap-5 bg-[#ffd755] md:px-28 px-10 p-10">
        <Card image={food} text={"Fast Food"} />
        <Card image={tree} text={"Salad"} />
        <Card image={tree} text={"Salad"} />
        <Card image={tree} text={"Salad"} />
      </div>
    </div>
  )
}

export default Categories
