import { Transition } from "@headlessui/react"
import React from "react"
import ModalButton from "./ui/ModalButton"
import { useAppDispatch } from "@/libs/hooks"
import { deleteProduct } from "@/libs/features/product/productSlice"

interface Props {
  isOpen: boolean
  productId: string
  closeModal: () => void
}

const ModalDelete = ({ isOpen, closeModal, productId }: Props) => {
  const dispatch = useAppDispatch()

  const handleDeleteProduct = (productId: any) => {
    dispatch(deleteProduct(productId))
    closeModal()
  }

  return (
    <>
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
              <h3 className="text-2xl text-center mt-4 font-semibold leading-6 text-gray-900">
                Are you sure?
              </h3>

              <div className="mt-5 px-11 flex flex-col gap-4">
                <ModalButton
                  onClick={() => handleDeleteProduct(productId)}
                  color="blue"
                  label="Yes"
                />
                <ModalButton onClick={closeModal} color="red" label="Cancel" />
              </div>
            </div>
          </Transition.Child>
        </div>
      </Transition>
    </>
  )
}

export default ModalDelete
