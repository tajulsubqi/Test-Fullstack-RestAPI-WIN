"use client"
import AuthLayout from "../layout"
import Image from "next/image"
import Link from "next/link"
import Input from "@/components/ui/Input"
import Dropdown from "@/components/ui/Dropdown"
import { useRouter } from "next/navigation"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Api, setAuthorization } from "@/libs/AxiosInstance"
import toast from "react-hot-toast"
import useAuth from "@/hooks/useAuth"

const Register = () => {
  const query = useQueryClient()
  const router = useRouter()
  const { formData, setFormData, handleGenderChange } = useAuth()

  const mutation = useMutation({
    mutationFn: (data) => Api.post("/auth/register", data),
    onSuccess: (response) => {
      const token = response.data.token
      setAuthorization(token)
      localStorage.setItem("token", token)
      query.invalidateQueries()
      toast.success("Register Successful!")
      router.push("/auth/login")
    },
    onError: (error) => {
      toast.error("Register Failed")
      console.log(error.message)
    },
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.password || !formData.gender) {
      return toast.error("Please fill in all required fields")
    }
    mutation.mutate(formData)
  }

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
