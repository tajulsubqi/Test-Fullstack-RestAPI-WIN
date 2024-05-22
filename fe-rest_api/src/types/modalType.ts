import { ProductType } from "./productType"

export type ModalType = {
  isOpen: boolean
  closeModal: () => void
  product: ProductType
  product_id?: number
}
