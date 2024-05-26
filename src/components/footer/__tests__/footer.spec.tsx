import { Footer } from '@/components/footer'
import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'

const renderComponent = () => {
  render(<Footer />)
}

describe('Footer', () => {
  it('should render a footer', () => {
    renderComponent()

    const footer = screen.getByTestId('footer')

    expect(footer).toBeInTheDocument()
  })
})
