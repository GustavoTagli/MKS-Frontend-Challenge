import { fireEvent, render, screen } from '@testing-library/react'
import { faker } from '@faker-js/faker'
import { Cart } from '@/components/cart'
import store from '@/lib/redux/store'
import { Provider } from 'react-redux'
import CartProvider from '@/providers/cart-provider'

import '@testing-library/jest-dom'

const mockUseCart = jest.fn()

jest.mock('../../../hooks/useCart', () => ({
  useCart: () => mockUseCart(),
}))

const renderComponent = () => {
  render(
    <Provider store={store}>
      <CartProvider>
        <Cart />
      </CartProvider>
    </Provider>
  )
}

describe('CartMenu', () => {
  it('should close the cart menu', () => {
    const toggleCart = mockUseCart.mockReturnValue({ toggleCart: jest.fn() })
    mockUseCart.mockReturnValue({ cartItems: [], isOpen: true })

    renderComponent()

    const button = screen.getByTestId('close-cart')
    fireEvent.click(button)

    expect(toggleCart).toHaveBeenCalled()
  })

  it('should show a message for the empty cart', () => {
    mockUseCart.mockReturnValue({ cartItems: [], isOpen: true })

    renderComponent()

    const button = screen.getByText('Finalizar Compra')
    fireEvent.click(button)

    expect(screen.getByText('Seu carrinho está vazio')).toBeInTheDocument()
  })

  it('should render the cart items', () => {
    const name = faker.commerce.productName()
    const brand = faker.company.name()

    mockUseCart.mockReturnValue({
      cartItems: [
        {
          id: faker.string.uuid(),
          brand,
          name,
          description: faker.commerce.productDescription(),
          photo: faker.image.url(),
          price: faker.commerce.price({ min: 100, max: 1000 }),
          quantity: 1,
          createdAt: faker.date.recent(),
          updatedAt: faker.date.recent(),
        },
      ],
      isOpen: true,
    })

    renderComponent()

    expect(screen.getByText(`${brand} ${name}`)).toBeInTheDocument()
  })
})
