import React, { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Api } from "@/libs/AxiosInstance"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { ProductType } from "@/types/productType"

const useAddProduct = () => {
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
    mutationFn: (data: FormData) => Api.post("/products", data, {}),
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

    const formDataWithImage = new FormData()
    formDataWithImage.append("name", formData.name)
    formDataWithImage.append("description", formData.description)
    formDataWithImage.append("price", formData.price.toString())
    formDataWithImage.append("stock", formData.stock.toString())
    formDataWithImage.append("image", formData.image)

    try {
      await mutation.mutateAsync(formDataWithImage)
      query.invalidateQueries()
      toast.success("Product created successfully")
      router.push("/home")
    } catch (error) {
      toast.error("Failed to create product")
      console.error("Error creating product:", error)
    }
  }

  return {
    formData,
    handleChange,
    handleImageChange,
    handleSubmit,
  }
}

export default useAddProduct
