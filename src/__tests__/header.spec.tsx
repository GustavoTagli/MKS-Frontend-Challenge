import { render, screen } from "@testing-library/react"
import React from "react"
import "@testing-library/jest-dom"
import { Header } from "@/components/header"

const renderComponent = () => {
	render(<Header />)
}

describe("Header", () => {
	it("should render a heading", () => {
		renderComponent()

		const heading = screen.getByTestId("heading")

		expect(heading).toBeInTheDocument()
	})
})
