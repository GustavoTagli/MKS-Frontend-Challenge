import { useProducts } from "@/hooks/useProducts"
import { GridProductItem } from "./grid-product-item"
import { GridSkeleton } from "./grid-skeleton"
import { When } from "../when"
import { GridContainer } from "@/styles/Grid.style"

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
