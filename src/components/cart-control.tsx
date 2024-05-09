import { ShoppingCartSimple } from "@phosphor-icons/react"
import styled from "styled-components"

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16px;
	height: 44px;
	padding: 8px 20px;

	border-radius: 8px;

	background-color: var(--primary-color);
	color: var(--dark-10);

	> span {
		font-size: 18px;
		font-weight: 700;
	}
`

export function CartControl() {
	return (
		<Container>
			<ShoppingCartSimple weight="fill" size={20} />
			<span>0</span>
		</Container>
	)
}
