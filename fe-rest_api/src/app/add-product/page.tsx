"use client"
import Input from "@/components/ui/Input"
import Sidebar from "@/components/Sidebar"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "@/libs/hooks"
import { addProduct } from "@/libs/features/product/productSlice"
import { Product } from "../interface"
import { useRouter } from "next/navigation"

const AddProduct = () => {
  const dispatch = useAppDispatch()
  const { loading, error } = useAppSelector((state) => state.app)

  const router = useRouter()

  const [formData, setFormData] = useState<Product>({
    name: "",
    description: "",
    image: "",
    price: 0,
    stock: 0,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push("/home")
    dispatch(addProduct(formData))
  }

  return (
    <div className="flex">
      <Sidebar />

      <div className="mx-auto mt-10 p-5 w-1/2">
        <h1 className="text-3xl text-center font-bold">Add Product</h1>
        <form onSubmit={handleSubmit} className=" flex flex-col gap-5 p-10 rounded-xl">
          <Input
            onChange={handleChange}
            name="name"
            type="text"
            label="Name"
            placeholder={"enter name"}
          />
          {error && error.includes("Name") && (
            <p className="text-red-500 text-sm -mt-5">{error}</p>
          )}

          <Input
            name="description"
            onChange={handleChange}
            type="text"
            label="Description"
            placeholder="enter description"
          />
          {error && error.includes("Description") && (
            <p className="text-red-500 text-sm -mt-5">{error}</p>
          )}

          <Input
            name="image"
            onChange={handleChange}
            type="text"
            label="Image"
            placeholder="enter image"
          />
          {error && error.includes("Image") && (
            <p className="text-red-500 text-sm -mt-5">{error}</p>
          )}

          <Input
            name="price"
            onChange={handleChange}
            type="number"
            label="Price"
            placeholder="enter price"
          />
          {error && error.includes("Price") && (
            <p className="text-red-500 text-sm -mt-5">{error}</p>
          )}

          <Input
            name="stock"
            onChange={handleChange}
            type="number"
            label="Stock"
            placeholder="enter stock"
          />
          {error && error.includes("Stock") && (
            <p className="text-red-500 text-sm -mt-5">{error}</p>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              className="w-1/5 bg-sky-500 text-white font-semibold text-md hover:bg-sky-600 duration-300 px-4 py-2 mt-1 rounded-md"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProduct
