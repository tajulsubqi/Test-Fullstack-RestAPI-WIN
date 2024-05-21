import { Transition } from "@headlessui/react"
import ModalButton from "./ui/ModalButton"
import Input from "./ui/Input"
import { useAppDispatch } from "@/libs/hooks"
import { useState } from "react"
import { updateProduct } from "@/libs/features/product/productSlice"
import { Product } from "@/app/interface"

export interface PropsModal {
  isOpen: boolean
  closeModal: () => void
  product: Product
}

const ModalEditProduct = ({ isOpen, closeModal, product }: PropsModal) => {
  const dispatch = useAppDispatch()

  const [formData, setFormData] = useState({
    id: product.id,
    name: product.name,
    image: product.image,
    description: product.description,
    price: product.price,
    stock: product.stock,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await dispatch(updateProduct(formData))
    closeModal()
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
                name="image"
                value={formData.image}
                onChange={handleChange}
                type="text"
                label="Image"
                placeholder="Enter image"
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
