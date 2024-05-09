import { useProducts } from "@/hooks/useProducts"
import styled from "styled-components"
import { GridProductItem } from "./grid-product-item"
import { GridSkeleton } from "./grid-skeleton"

const GridContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 24px;
	align-items: center;
	justify-content: center;
`

export function GridProducts() {
	const { products } = useProducts()

	return (
		<GridContainer>
			{!products
				? Array.from({ length: 8 }).map((_, index) => (
						<GridSkeleton key={index} />
				  ))
				: products?.map((product) => (
						<GridProductItem key={product.id} product={product} />
				  ))}
		</GridContainer>
	)
}