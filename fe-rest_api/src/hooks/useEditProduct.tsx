import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Api } from "@/libs/AxiosInstance"
import toast from "react-hot-toast"
import { ProductType } from "@/types/productType"

const useEditProduct = (product: ProductType, closeModal: () => void) => {
  const queryClient = useQueryClient()
  const [formData, setFormData] = useState(product)

  const mutation = useMutation({
    mutationFn: (data: FormData) =>
      Api.put(`/product/${product.id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (image: File) => {
    setFormData((prev) => ({ ...prev, image }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formDataWithImage = new FormData()
    formDataWithImage.append("name", formData.name)
    formDataWithImage.append("description", formData.description)
    formDataWithImage.append("price", formData.price.toString())
    formDataWithImage.append("stock", formData.stock.toString())
    formDataWithImage.append("image", formData.image)

    try {
      await mutation.mutateAsync(formDataWithImage, {
        onSuccess: () => {
          toast.success("Product Updated!")
          queryClient.invalidateQueries()
          closeModal()
        },
        onError: (error) => {
          toast.error("Failed to update product")
          console.error("Error updating product:", error)
        },
      })
    } catch (error) {
      toast.error("Failed to update product")
      console.error("Error updating product:", error)
    }
  }

  return {
    formData,
    handleChange,
    handleImageChange,
    handleSubmit,
  }
}

export default useEditProduct
