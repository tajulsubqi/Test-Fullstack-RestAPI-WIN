"use client"
import React, { useState } from "react"
import Input from "@/components/ui/Input"
import Sidebar from "@/components/Sidebar"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Api } from "@/libs/AxiosInstance"
import toast from "react-hot-toast"
import ImageUpload from "@/components/ui/ImageUpload"
import { useRouter } from "next/navigation"
import { ProductType } from "@/types/productType"

const AddProduct = () => {
  const query = useQueryClient()
  const router = useRouter()

  const [formData, setFormData] = useState<ProductType>({
    name: "",
    description: "",
    image: "",
    price: 0,
    stock: 0,
  })

  const mutation = useMutation({
    mutationFn: () => Api.post("/products", formData),
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleImageChange = (image: File) => {
    setFormData({ ...formData, image })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      !formData.name ||
      !formData.description ||
      formData.price <= 0 ||
      formData.stock < 0 ||
      !formData.image
    ) {
      return toast.error("Please fill in all required fields")
    }

    const formDataWithImage: any = new FormData()
    formDataWithImage.append("name", formData.name)
    formDataWithImage.append("description", formData.description)
    formDataWithImage.append("price", formData.price.toString())
    formDataWithImage.append("stock", formData.stock.toString())
    formDataWithImage.append("image", formData.image)

    await mutation.mutateAsync(formDataWithImage)
    query.invalidateQueries()
    toast.success("Product created successfully")
    router.push("/home")
  }

  return (
    <div className="flex">
      <Sidebar />

      <div className="mx-auto mt-10 p-5 w-1/2">
        <h1 className="text-3xl text-center font-bold">Add Product</h1>
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col gap-5 p-10 rounded-xl"
        >
          <Input
            onChange={handleChange}
            name="name"
            type="text"
            label="Name"
            placeholder="Enter name"
          />

          <Input
            name="description"
            onChange={handleChange}
            type="text"
            label="Description"
            placeholder="Enter description"
          />

          <Input
            name="price"
            onChange={handleChange}
            type="number"
            label="Price"
            placeholder="Enter price"
          />

          <Input
            name="stock"
            onChange={handleChange}
            type="number"
            label="Stock"
            placeholder="Enter stock"
          />

          <ImageUpload onChange={handleImageChange} />
          <div className="flex justify-end">
            <button
              type="submit"
              className="absolute bottom-20 w-1/5 bg-sky-500 text-white font-semibold text-md hover:bg-sky-600 duration-300 px-4 py-2  rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProduct
