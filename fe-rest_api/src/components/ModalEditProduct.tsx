"use client"
import { Transition } from "@headlessui/react"
import ModalButton from "./ui/ModalButton"
import Input from "./ui/Input"
import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Api } from "@/libs/AxiosInstance"
import toast from "react-hot-toast"
import { ModalType } from "@/types/modalType"
import ImageUpload from "./ui/ImageUpload"

const ModalEditProduct = ({ isOpen, closeModal, product }: ModalType) => {
  const query = useQueryClient()
  const [formData, setFormData] = useState(product)

  const mutation = useMutation({
    mutationFn: (data: FormData) => Api.put(`/product/${product.id}`, data),
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
          query.invalidateQueries()
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

  return (
    <Transition show={isOpen}>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-60">
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
            <h3 className="text-xl leading-6 text-center font-semibold mb-7 text-gray-900">
              Edit Product
            </h3>

            <form onSubmit={handleSubmit} className="mt-2 px-3 flex flex-col gap-3">
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                label="Name"
                placeholder="Enter name"
              />
              <Input
                name="description"
                value={formData.description}
                onChange={handleChange}
                type="text"
                label="Description"
                placeholder="Enter description"
              />
              <Input
                name="price"
                value={formData.price}
                onChange={handleChange}
                type="number"
                label="Price"
                placeholder="Enter price"
              />
              <Input
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                type="number"
                label="Stock"
                placeholder="Enter stock"
              />

              <ImageUpload onChange={handleImageChange} />

              <ModalButton className="mt-5" type="submit" color="blue" label="Update" />
            </form>

            <ModalButton
              className="mt-2 px-3"
              onClick={closeModal}
              color="red"
              label="Cancel"
            />
          </div>
        </Transition.Child>
      </div>
    </Transition>
  )
}

export default ModalEditProduct
