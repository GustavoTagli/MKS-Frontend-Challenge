export interface Product {
  id: string
  name: string
  brand: string
  description: string
  photo: string
  price: number
  createdAt: Date
  updatedAt: Date
}

export interface ProductInCart extends Product {
  quantity: number
}
