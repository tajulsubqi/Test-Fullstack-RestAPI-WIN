"use client"
import Input from "@/components/ui/Input"
import Sidebar from "@/components/Sidebar"
import ImageUpload from "@/components/ui/ImageUpload"
import useAddProduct from "@/hooks/useAddProduct"

const AddProduct = () => {
  const { handleSubmit, handleChange, handleImageChange } = useAddProduct()

  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>

      <div className="mx-auto mt-10 p-10 w-1/2">
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
              className="absolute bottom-20 w-1/5 bg-sky-500 text-white font-semibold text-md hover:bg-sky-600 duration-300 px-4 py-2 rounded-md"
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
