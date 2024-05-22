"use client"
import React, { useState } from "react"
import AuthLayout from "../layout"
import Image from "next/image"
import Link from "next/link"
import Input from "@/components/ui/Input"
import Dropdown from "@/components/ui/Dropdown"
import { useAppDispatch, useAppSelector } from "@/libs/hooks"
import { registerUser } from "@/libs/features/auth/authSlice"
import { useRouter } from "next/navigation"

interface IFormData {
  name: string
  email: string
  password: string
  gender: string
}

const Register = () => {
  const dispatch = useAppDispatch()
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({})
  const { status, error } = useAppSelector((state) => state.auth)
  const router = useRouter()

  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    password: "",
    gender: "",
  })

  const handleGenderChange = (gender: string) => {
    setFormData({ ...formData, gender })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(registerUser(formData))

    const errors: { [key: string]: string } = {}
    if (!formData.name) errors.name = "Name is required"
    if (!formData.email) errors.email = "Email is required"
    if (!formData.password) errors.password = "Password is required"
    // Tambahkan validasi email menggunakan regex jika diperlukan

    if (Object.keys(errors).length > 0) {
      // Jika ada error, set state validationErrors dan stop submit
      setValidationErrors(errors)
      return
    }

    router.push("/auth/login")
  }
  console.log("Form Data:", formData)

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
          <form onSubmit={handleSubmit}>
            <h1 className="text-3xl text-center font-bold mb-4">Register</h1>

            <div className="flex flex-col gap-5">
              <Input
                type="text"
                label="Name"
                placeholder="enter name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <Dropdown onChange={handleGenderChange} />{" "}
              <Input
                type="email"
                label="Email"
                placeholder="enter email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <Input
                type="password"
                label="Password"
                placeholder="enter password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-sky-500 text-white font-semibold text-md hover:bg-sky-600 duration-300 px-4 py-2 mt-8 rounded-full"
            >
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
