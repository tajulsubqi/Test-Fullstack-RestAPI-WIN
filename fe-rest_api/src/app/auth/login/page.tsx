import React from "react"
import AuthLayout from "../layout"
import Input from "@/components/ui/Input"
import Link from "next/link"
import Image from "next/image"

const Login = () => {
  return (
    <AuthLayout>
      <div
        className="bg-[#CAF4FF] rounded-3xl flex w-full h-full"
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
            <h1 className="text-3xl text-center font-bold mb-4">Login</h1>

            <div className="flex flex-col gap-5">
              <Input type="text" label="Email" placeholder="enter email" />
              <Input type="password" label="Password" placeholder="enter password" />
            </div>

            <button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold text-md duration-300 px-4 py-2 mt-8 rounded-full">
              <Link href="/home">Login</Link>
            </button>

            <p className="text-center mt-2 text-sm">
              Sign Up Now!
              <Link
                href="/auth/register"
                className="text-red-500 hover:text-sky-600 underline ml-2"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Login
