import React from "react"

interface Props {
  type: string
  label: string
  placeholder?: string
  onClick?: () => void
}

const Input = ({ type, label, placeholder, onClick }: Props) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input
        onClick={onClick}
        type={type}
        placeholder={placeholder}
        className="inline-flex justify-between w-full px-4 py-2 border border-slate-400 text-sm font-medium text-slate-500 bg-slate-100 rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
      />
    </div>
  )
}

export default Input
