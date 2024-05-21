import React from "react"
import AuthLayout from "../layout"
import Image from "next/image"
import Link from "next/link"
import Input from "@/components/ui/Input"
import Dropdown from "@/components/ui/Dropdown"

const Register = () => {
  return (
    <AuthLayout>
      <div
        className="flex w-full h-full rounded-3xl"
        style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="w-1/2 ">
          <Image
            src={"/assets/img.png"}
            alt="register"
            width={500}
            height={500}
            className="w-full h-full rounded-l-3xl "
          />
        </div>

        <div className="w-1/2 bg-white p-16 rounded-r-3xl">
          <form action="">
            <h1 className="text-3xl text-center font-bold mb-4">Register</h1>

            <div className="flex flex-col gap-5">
              <Input type="text" label="Name" placeholder="enter name" />
              {/* <Input type="text" label="Gender" placeholder="enter gender" /> */}
              <Dropdown/>
              <Input type="text" label="Email" placeholder="enter email" />
              <Input type="password" label="Password" placeholder="enter password" />
            </div>

            <button className="w-full bg-sky-500 text-white font-semibold text-md hover:bg-sky-600 duration-300 px-4 py-2 mt-8 rounded-full">
              Register
            </button>
            <p className="text-center text-sm mt-2">
              Already have an account?
              <Link
                href="/auth/login"
                className="text-red-500 hover:text-red-600 underline ml-2"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Register
