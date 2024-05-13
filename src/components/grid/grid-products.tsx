import { useProducts } from "@/hooks/useProducts"
import styled from "styled-components"
import { GridProductItem } from "./grid-product-item"
import { GridSkeleton } from "./grid-skeleton"
import { When } from "../when"

const GridContainer = styled.section`
	position: relative;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 24px;

	.center {
		grid-column: 1 / -1;
		text-align: center;
	}

	@media (max-width: ${({ theme }) => theme.desktopBreakpoint}) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: ${({ theme }) => theme.tabletBreakpoint}) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
		grid-template-columns: 1fr;
	}
`

export function GridProducts() {
	const { products, isLoading } = useProducts()

	return (
		<GridContainer>
			<When expr={isLoading}>
				{Array.from({ length: 8 }).map((_, index) => (
					<GridSkeleton key={index} />
				))}
			</When>
			<When expr={products?.length === 0}>
				<p className="center">Nenhum produto disponível</p>
			</When>
			<When expr={products}>
				{products?.map((product) => (
					<GridProductItem key={product.id} product={product} />
				))}
			</When>
		</GridContainer>
	)
}
