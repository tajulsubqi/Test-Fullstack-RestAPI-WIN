
export type ProductType = {
  id?: number
  name: string
  image: any
  description: string
  price: number
  stock: number
  onUpdateProduct?: () => void
}

export type ProductStateType = {
  products: ProductType[]
  loading: boolean
  error: string | null
}
