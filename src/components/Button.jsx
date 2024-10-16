import React from "react"

const Button = ({ text, color = "text-balck", content }) => {
  return (
    <div>
      <button className="bg-amber-300 p-3 md:px-8 px-5 flex justify-center gap-1 items-center  text-amber-800 md:text-2xl text-sm rounded-full">
        {text} <span className={`${color}`}>{content}</span>
      </button>
    </div>
  )
}

export default Button
