import Link from "next/link"
import React from "react"
import { GrTableAdd } from "react-icons/gr"
import { IoHome } from "react-icons/io5"

const Sidebar = () => {
  return (
    <div className="h-screen sticky top-0 flex overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div className="w-72 flex flex-col bg-gray-800">
        <div className="h-16 flex justify-center items-center bg-gray-900">
          <span className="text-white text-xl mr-6 font-semibold">Sidebar</span>
        </div>

        <nav className="mt-10 px-4">
          <div className="flex gap-1 flex-col ">
            <Link
              href="/home"
              className="flex items-center gap-2 py-2 px-4 text-base rounded-md text-gray-200 hover:bg-gray-700 "
            >
              <IoHome size={25} color="white" /> Home
            </Link>

            <Link
              href="/add-product"
              className="flex items-center gap-2 py-2 px-4 text-base rounded-md text-gray-200 hover:bg-gray-700"
            >
              <GrTableAdd size={20} color="white" /> Add product
            </Link>
          </div>
        </nav>

        <div className="mt-auto p-5 flex flex-col gap-2">
          <p className="text-gray-200">Welcome, Tajul</p>
          <Link
            href="/auth/login"
            className="w-full block py-2 px-4 text-center text-base text-gray-200 bg-sky-500 hover:bg-sky-600 font-semibold duration-300 rounded-md"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
