"use client"
import Image from "next/image"
import React, { useState } from "react"
import ModalEditProduct from "./ModalEditProduct"
import ModalDelete from "./ModalDelete"
import ModalButton from "./ui/ModalButton"

interface Props {
  name: string
  image: string
  description: string
  price: number
  stock: number
}

const ProductCard = ({ name, image, description, price, stock }: Props) => {
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false)
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)

  return (
    <>
      <div className="rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-lg ">
        <Image className="w-full" src={image} alt={name} width={200} height={200} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>

        <div className="px-6 pt-4 pb-3">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Price: ${price}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Stock: {stock}
          </span>

          <div className="flex gap-2 mt-2 ">
            <ModalButton
              label="Delete"
              color="red"
              onClick={() => setIsOpenModalDelete(true)}
            />

            <ModalButton
              label="Edit"
              color="blue"
              onClick={() => setIsOpenModalEdit(true)}
            />
          </div>
        </div>
      </div>

      <ModalEditProduct
        isOpen={isOpenModalEdit}
        closeModal={() => setIsOpenModalEdit(false)}
      />
      <ModalDelete
        isOpen={isOpenModalDelete}
        closeModal={() => setIsOpenModalDelete(false)}
      />
    </>
  )
}

export default ProductCard
