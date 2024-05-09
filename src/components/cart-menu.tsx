import { Drawer } from "@mui/material"
import { X } from "@phosphor-icons/react"
import styled from "styled-components"
import { CloseButton } from "./close-button"

interface CartMenuProps {
	open: boolean
	toggleDrawer: (newOpen: boolean) => () => void
}

const CartContainer = styled.div`
	width: 486px;
	height: 100vh;
	background-color: var(--secondary-color);
	color: var(--primary-color);
	padding: 24px;

	> div {
		display: flex;
		justify-content: space-between;
		align-items: center;

		> h3 {
			font-size: 28px;
			font-family: inherit;
			font-weight: 700;
		}
	}
`

export function CartMenu({ open, toggleDrawer }: CartMenuProps) {
	return (
		<Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
			<CartContainer>
				<div>
					<h3>
						Carrinho <br /> de compras
					</h3>
					<CloseButton onClick={toggleDrawer(false)} size={20} />
				</div>
			</CartContainer>
		</Drawer>
	)
}
