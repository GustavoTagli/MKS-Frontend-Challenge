import Home from "@/app/page"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { render, screen } from "@testing-library/react"
import React from "react"
import "@testing-library/jest-dom"

const renderComponent = () => {
	const queryClient = new QueryClient()
	render(
		<QueryClientProvider client={queryClient}>
			<Home />
		</QueryClientProvider>
	)
}

describe("Header", () => {
	it("renders a heading", () => {
		renderComponent()

		const heading = screen.getByRole("heading", { level: 1 })

		expect(heading).toBeInTheDocument()
	})
})
