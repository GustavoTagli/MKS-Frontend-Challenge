import styled from "styled-components"
import { CartControl } from "./cart-control"
import { CartMenu } from "./cart-menu"
import { useState } from "react"

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

	@media (max-width: ${({ theme }) => theme.desktopBreakpoint}) {
		position: fixed;
		z-index: 1000;
	}

	@media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
		padding: 20px 20px;
		> h1 {
			font-size: 32px;
			> span {
				font-size: 16px;
			}
		}
	}
`

export function Header() {
	const [open, setOpen] = useState(false)

	const toggleDrawer = (newOpen: boolean) => {
		setOpen(newOpen)
	}

	return (
		<TagHeader data-testid="heading">
			<h1>
				MKS
				<span>Sistemas</span>
			</h1>
			<CartControl toggleDrawer={toggleDrawer} />
			<CartMenu open={open} toggleDrawer={toggleDrawer} />
		</TagHeader>
	)
}
