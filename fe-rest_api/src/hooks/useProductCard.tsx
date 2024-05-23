import { ProductType } from "@/types/productType"
import { useState } from "react"

const useProductCard = () => {
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

  return {
    isOpenModalEdit,
    setIsOpenModalEdit,
    isOpenModalDelete,
    setIsOpenModalDelete,
    selectedProduct,
    selectedProductId,
    handleEditProduct,
    handleDeleteProduct,
  }
}

export default useProductCard
