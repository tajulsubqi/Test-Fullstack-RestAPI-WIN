import React from "react"

interface Props {
  label: string
  color: string
  onClick: () => void
}

const ModalButton = ({ label, color, onClick }: Props) => {
  return (
    <>
      <button
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
    </>
  )
}

export default ModalButton
