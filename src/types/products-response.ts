import { Product } from "./product"

export interface ProductsFetchResponse {
	products: Product[]
	count: number
}
