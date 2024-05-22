"use client"
import Image from "next/image"
import { useState } from "react"
import ModalEditProduct from "./ModalEditProduct"
import ModalDelete from "./ModalDelete"
import ModalButton from "./ui/ModalButton"
import { ProductType } from "@/types/productType"

const ProductCard = ({ id, name, image, description, price, stock }: ProductType) => {
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false)
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null)
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null)

  const handleEditProduct = (product: ProductType) => {
    setSelectedProduct(product)
    setIsOpenModalEdit(true)
  }

  const handleDeleteProduct = (product_Id: any) => {
    setSelectedProductId(product_Id)
    setIsOpenModalDelete(true)
  }

  console.log(selectedProductId)

  return (
    <>
      <div
        className="rounded-tr-3xl bg-slate-100 rounded-bl-3xl overflow-hidden"
        style={{ boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.25)" }}
      >
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          priority
          className="w-full h-72 object-cover p-1 rounded-tr-3xl"
        />

        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>

        <div className="px-6">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-8">
            Price: {price}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Stock: {stock}
          </span>

          <div className="flex gap-2 mb-4">
            <ModalButton
              label="Delete"
              color="red"
              onClick={() => handleDeleteProduct(id)}
            />

            <ModalButton
              label="Edit"
              color="blue"
              onClick={() =>
                handleEditProduct({ id, name, image, description, price, stock })
              }
            />
          </div>
        </div>
      </div>

      {selectedProduct && (
        <ModalEditProduct
          product={selectedProduct}
          isOpen={isOpenModalEdit}
          closeModal={() => setIsOpenModalEdit(false)}
        />
      )}

      {selectedProductId && (
        <ModalDelete
          product_id={selectedProductId}
          isOpen={isOpenModalDelete}
          closeModal={() => setIsOpenModalDelete(false)}
        />
      )}
    </>
  )
}

export default ProductCard
