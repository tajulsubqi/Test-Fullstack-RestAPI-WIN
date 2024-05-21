export interface Product {
  id?: number
  name: string
  image: string
  description: string
  price: number
  stock: number
}

export interface ProductState {
  products: Product[]
  loading: boolean
  error: string | null
}
