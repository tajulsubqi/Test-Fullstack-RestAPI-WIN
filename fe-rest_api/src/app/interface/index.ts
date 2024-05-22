export interface Product {
  id?: number
  name: string
  image: string
  description: string
  price: number
  stock: number
  onUpdateProduct?: () => void
}

export interface ProductState {
  products: Product[]
  loading: boolean
  error: string | null
}
