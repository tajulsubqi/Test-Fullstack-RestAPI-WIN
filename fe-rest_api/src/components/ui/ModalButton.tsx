import React from "react"

interface Props {
  label: string
  color: string
  className?: string
  type?: "button" | "submit" | "reset"
  onClick?: () => void
}

const ModalButton = ({ label, color, type, className, onClick }: Props) => {
  return (
    <div className={` w-full ${className}`}>
      <button
        type={type}
        onClick={onClick}
        className={`w-full ${
          color === "red"
            ? "text-red-500 border border-red-500 hover:bg-red-100"
            : "blue"
            ? " bg-sky-500 hover:bg-sky-600 text-white"
            : ""
        } w-full font-bold py-2 px-4 rounded-md duration-300`}
      >
        {label}
      </button>
    </div>
  )
}

export default ModalButton
