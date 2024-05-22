"use client"
import React, { useState } from "react"
import AuthLayout from "../layout"
import Input from "@/components/ui/Input"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Api, setAuthorization } from "@/libs/AxiosInstance"
import useAuth from "@/hooks/useAuth"

const Login = () => {
  const query = useQueryClient()
  const router = useRouter()
  const { formData, handleChange } = useAuth()

  const mutation = useMutation({
    mutationFn: (data) => Api.post("/auth/login", data),
    onSuccess: (response) => {
      const { token } = response.data
      setAuthorization(token)
      localStorage.setItem("token", token)
      query.invalidateQueries()
      toast.success("Login Successful!")
      router.push("/home")
    },
    onError: () => {
      toast.error("Login Failed")
    },
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.email || !formData.password) {
      return toast.error("Please fill in all required fields")
    }
    mutation.mutate(formData)
  }

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
            className="w-full h-full rounded-l-3xl"
          />
        </div>

        <div className="w-1/2 bg-white p-16 rounded-r-3xl">
          <form onSubmit={handleSubmit}>
            <h1 className="text-3xl text-center font-bold mb-4">Login</h1>
            <div className="flex flex-col gap-5">
              <Input
                type="email"
                name="email"
                label="Email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                type="password"
                name="password"
                label="Password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold text-md duration-300 px-4 py-2 mt-8 rounded-full"
            >
              Login
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
