import styled from "styled-components"
import { CartControl } from "./cart-control"

const TagHeader = styled.header`
	flex: 0 0 auto;
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--secondary-color);
	padding: 20px 64px;
	width: 100%;

	font-family: inherit;

	> h1 {
		font-size: 40px;
		font-weight: 600;
		color: var(--primary-color);

		> span {
			font-size: 20px;
			font-weight: 300;
			margin-left: 5px;
		}
	}
`

export function Header() {
	return (
		<TagHeader>
			<h1>
				MKS
				<span>Sistemas</span>
			</h1>
			<CartControl />
		</TagHeader>
	)
}
