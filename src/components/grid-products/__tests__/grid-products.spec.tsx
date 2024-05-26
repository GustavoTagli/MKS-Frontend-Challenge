import { GridProducts } from '@/components/grid-products'
import store from '@/lib/redux/store'
import CartProvider from '@/providers/cart-provider'
import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import '@testing-library/jest-dom'

const mockUseProducts = jest.fn()

jest.mock('../../../hooks/useProducts', () => ({
  useProducts: () => mockUseProducts(),
}))

const renderComponent = () =>
  render(
    <Provider store={store}>
      <CartProvider>
        <GridProducts />
      </CartProvider>
    </Provider>
  )

describe('GridProducts', () => {
  it('should render a grid of items', () => {
    const descriptionItem1 = faker.commerce.productDescription()
    const descriptionItem2 = faker.commerce.productDescription()
    mockUseProducts.mockReturnValue({
      products: [
        {
          id: faker.string.uuid(),
          brand: faker.company.name(),
          name: faker.commerce.productName(),
          photo: faker.image.url(),
          price: +faker.commerce.price({ min: 100, max: 1000 }),
          description: descriptionItem1,
          createdAt: faker.date.recent(),
          updatedAt: faker.date.recent(),
        },
        {
          id: faker.string.uuid(),
          brand: faker.company.name(),
          name: faker.commerce.productName(),
          photo: faker.image.url(),
          price: +faker.commerce.price({ min: 100, max: 1000 }),
          description: descriptionItem2,
          createdAt: faker.date.recent(),
          updatedAt: faker.date.recent(),
        },
      ],
      isLoading: false,
    })

    renderComponent()

    expect(screen.getByText(descriptionItem1)).toBeInTheDocument()
    expect(screen.getByText(descriptionItem2)).toBeInTheDocument()
  })

  it('should render a message when there are no items', () => {
    mockUseProducts.mockReturnValue({
      products: [],
      isLoading: false,
    })

    render(<GridProducts />)

    expect(screen.getByText('Nenhum produto disponível')).toBeInTheDocument()
  })

  it('should render a skeleton when loading', () => {
    mockUseProducts.mockReturnValue({
      products: [],
      isLoading: true,
    })

    renderComponent()

    expect(screen.getAllByTestId('grid-skeleton').length).toBe(8)
  })
})
