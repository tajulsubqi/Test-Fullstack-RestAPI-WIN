import { InputType } from "@/types/inputType"
import React from "react"

const Input = (Props: InputType) => {
  const { type, label, placeholder, onClick, onChange, value, name, className } = Props

  return (
    <div className={` ${className}`}>
      <label htmlFor="">{label}</label>
      <input
        name={name}
        onChange={onChange}
        onClick={onClick}
        value={value}
        type={type}
        placeholder={placeholder}
        className="inline-flex justify-between w-full px-4 py-2 border border-slate-400 text-sm font-medium text-slate-500 bg-slate-100 rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
      />
    </div>
  )
}

export default Input
