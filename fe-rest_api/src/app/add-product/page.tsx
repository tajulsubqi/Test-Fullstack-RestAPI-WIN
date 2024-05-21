import Input from "@/components/ui/Input"
import Sidebar from "@/components/Sidebar"
import React from "react"

const AddProduct = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="mx-auto mt-10 p-5 w-1/2">
        <h1 className="text-3xl text-center font-bold">Add Product</h1>

        <form action="" className=" flex flex-col gap-5 p-10 rounded-xl">
          <Input type="text" label="Name" placeholder="enter name" />
          <Input type="text" label="Image" placeholder="enter image" />
          <Input type="text" label="Description" placeholder="enter description" />
          <Input type="number" label="Price" placeholder="enter price" />
          <Input type="number" label="Stock" placeholder="enter stock" />

          <div className="flex justify-end">
            <button className="w-1/5 bg-sky-500 text-white font-semibold text-md hover:bg-sky-600 duration-300 px-4 py-2 mt-1 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProduct
