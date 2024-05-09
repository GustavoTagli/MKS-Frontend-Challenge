import { Product } from "@/types/product"
import { formatCurrency } from "@/utils/format-currency"
import { ShoppingBagOpen } from "@phosphor-icons/react"
import Image from "next/image"
import styled from "styled-components"

interface GridProductItemProps {
	product: Product
}

const ContainerProduct = styled.div`
	height: 300px;
	width: 220px;
	padding: 14px;
	padding-bottom: 32px;

	position: relative;
	display: flex;
	flex-direction: column;
	gap: 14px;

	background-color: var(--primary-color);
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
	overflow: hidden;
	cursor: pointer;

	> figure {
		height: 130px;
		margin: 0 auto;
		> img {
			width: auto;
			height: 100%;
		}
	}

	> button {
		cursor: pointer;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: center;
		gap: 12px;
		padding: 8px 0;

		background-color: var(--secondary-color);
		color: var(--primary-color);
		border: none;
		outline: none;

		> span {
			text-transform: uppercase;
			font-family: inherit;
			font-size: 14px;
			font-weight: 600;
		}
	}
`

const ProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;

	> div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 6px;

		> h3 {
			font-size: 16px;
			font-weight: 400;
			font-family: inherit;
			color: var(--text-color);

			display: -webkit-box;
			-webkit-line-clamp: 2;
			overflow: hidden;
			-webkit-box-orient: vertical;
		}

		> div {
			display: flex;
			align-items: center;
			gap: 4px;
			padding: 4px 8px;
			height: 24px;

			border-radius: 6px;
			background-color: var(--dark-20);

			> p {
				font-size: 15px;
				font-weight: 700;
				font-family: inherit;
				color: var(--primary-color);
			}
		}
	}
	> p {
		font-size: 10px;
		font-weight: 300;
		font-family: inherit;
		color: var(--text-color);

		display: -webkit-box;
		-webkit-line-clamp: 4;
		overflow: hidden;
		-webkit-box-orient: vertical;
	}
`

export function GridProductItem({ product }: GridProductItemProps) {
	return (
		<ContainerProduct>
			<figure>
				<Image
					src={product.photo}
					alt={`Imagem do produto: ${product.name}`}
					width={170}
					height={130}
				/>
			</figure>
			<ProductInfo>
				<div>
					<h3>{`${product.brand} ${product.name}`}</h3>
					<div>
						<p>
							R$
							<span>{formatCurrency(product.price)}</span>
						</p>
					</div>
				</div>
				<p>{product.description}</p>
			</ProductInfo>
			<button>
				<ShoppingBagOpen size={16} />
				<span>Comprar</span>
			</button>
		</ContainerProduct>
	)
}
