import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { render, screen } from "@testing-library/react"
import React from "react"
import "@testing-library/jest-dom"
import { Footer } from "@/components/footer"

const renderComponent = () => {
	render(<Footer />)
}

describe("Footer", () => {
	it("should render a footer", () => {
		renderComponent()

		const footer = screen.getByTestId("footer")

		expect(footer).toBeInTheDocument()
	})
})
