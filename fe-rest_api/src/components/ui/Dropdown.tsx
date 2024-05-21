"use client"
import { useState } from "react"

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedGender, setSelectedGender] = useState("")

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const selectGender = (gender: string) => {
    setSelectedGender(gender)
    setIsOpen(false)
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <label htmlFor="">Gender</label>
        <button
          type="button"
          className="inline-flex justify-between w-full px-4 py-2 border border-slate-400 text-sm font-medium text-slate-500 bg-slate-100 rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
          onClick={toggleDropdown}
        >
          {selectedGender || "Pilih Jenis Kelamin"}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <button
              onClick={() => selectGender("Laki-laki")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Laki-laki
            </button>
            <button
              onClick={() => selectGender("Perempuan")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Perempuan
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
