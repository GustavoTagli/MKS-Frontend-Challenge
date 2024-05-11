"use client"

import { Footer } from "@/components/footer"
import { GridProducts } from "@/components/grid-products"
import { Header } from "@/components/header"
import styled from "styled-components"

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;

	min-height: 100vh;

	> main {
		flex: 1 1 auto;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 36px 24px;
	}

	@media (max-width: ${({ theme }) => theme.desktopBreakpoint}) {
		> main {
			margin-top: 80px;
		}
	}
`

export default function Home() {
	return (
		<Container>
			<Header />
			<main>
				<GridProducts />
			</main>
			<Footer />
		</Container>
	)
}
