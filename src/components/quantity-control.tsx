import { Minus, Plus } from "@phosphor-icons/react"
import styled from "styled-components"

interface QuantityControlProps {
	quantity: number
	updateQuantity: (newQuantity: number) => void
}

const QuantityContainer = styled.div`
	width: 100%;
	.disabled {
		color: var(--gray-10);
	}

	> p {
		font-size: 8px;
		font-family: inherit;
		font-weight: 400;
		margin-bottom: 4px;
	}

	> div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 6px;
		padding: 4px 8px;
		width: 100%;
		height: 100%;

		background-color: var(--primary-color);
		border-radius: 4px;
		border: 0.3px solid var(--gray-10);

		> button {
			width: 10px;
			// height: 10px;
			display: flex;
			align-items: center;
			background-color: transparent;
			color: var(--dark-10);
			border: none;
			cursor: pointer;
			outline: none;
		}

		> p {
			font-size: 12px;
			font-family: inherit;
			font-weight: 400;
			color: var(--dark-10);
			width: 10px;
			text-align: center;
		}

		> span {
			width: 0.2px;
			height: 14px;
			background-color: var(--gray-10);
		}
	}

	@media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
		grid-area: quantity;
		max-width: 100px;
		height: 36px;

		> p {
			display: none;
		}
	}
`

export function QuantityControl({
	quantity,
	updateQuantity
}: QuantityControlProps) {
	const handleDecrement = () => updateQuantity(quantity - 1)
	const handleIncrement = () => updateQuantity(quantity + 1)

	return (
		<QuantityContainer>
			<p>Qtd:</p>
			<div>
				<button
					onClick={handleDecrement}
					disabled={quantity === 1 ? true : false}
					className={quantity === 1 ? "disabled" : ""}
				>
					<Minus size={10} />
				</button>
				<span></span>
				<p>{quantity}</p>
				<span></span>
				<button onClick={handleIncrement}>
					<Plus size={10} />
				</button>
			</div>
		</QuantityContainer>
	)
}
