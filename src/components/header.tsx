import styled from "styled-components"
import { CartControl } from "./cart/cart-control"
import { CartMenu } from "./cart/cart-menu"
import { useState } from "react"
import { TagHeader } from "@/styles/Home.style"

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
