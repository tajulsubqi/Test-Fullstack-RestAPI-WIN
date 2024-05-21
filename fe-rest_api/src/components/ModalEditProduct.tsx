import { Transition } from "@headlessui/react"
import ModalButton from "./ui/ModalButton"
import Input from "./ui/Input"

export interface PropsModal {
  isOpen: boolean
  closeModal: () => void
}

const ModalEditProduct = ({ isOpen, closeModal }: PropsModal) => {
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

            <div className="mt-2 px-3 flex flex-col gap-3">
              <Input type="text" label="Name" placeholder="enter name" />
              <Input type="text" label="Image" placeholder="enter image" />
              <Input type="text" label="Description" placeholder="enter description" />
              <Input type="number" label="Price" placeholder="enter price" />
              <Input type="number" label="Stock" placeholder="enter stock" />
            </div>

            <div className="mt-8 flex gap-3 px-3">
              <ModalButton onClick={closeModal} color="red" label="Cancel" />
              <ModalButton color="blue" label="Update" />
            </div>
          </div>
        </Transition.Child>
      </div>
    </Transition>
  )
}

export default ModalEditProduct
