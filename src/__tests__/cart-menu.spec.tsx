import { CartMenu } from '@/components/cart/cart-menu';
import { fireEvent, render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';

import '@testing-library/jest-dom';

const mockUseCart = jest.fn();

jest.mock('../hooks/useCart', () => ({
  useCart: () => mockUseCart(),
}));

const renderComponent = (toggleDrawer: () => void) => {
  render(<CartMenu open={true} toggleDrawer={toggleDrawer} />);
};

describe('CartMenu', () => {
  it('should close the cart menu', () => {
    const toggleDrawer = jest.fn();
    mockUseCart.mockReturnValue({ cartItems: [] });

    renderComponent(toggleDrawer);

    const button = screen.getByTestId('close-cart');

    fireEvent.click(button);

    expect(toggleDrawer).toHaveBeenCalled();
  });

  it('should show a message for the empty cart', () => {
    mockUseCart.mockReturnValue({ cartItems: [] });

    renderComponent(() => {});

    const button = screen.getByText('Finalizar Compra');
    fireEvent.click(button);

    expect(screen.getByText('Seu carrinho está vazio')).toBeInTheDocument();
  });

  it('should render the cart items', () => {
    const name = faker.commerce.productName();
    const brand = faker.company.name();

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
    });

    renderComponent(() => {});

    expect(screen.getByText(`${brand} ${name}`)).toBeInTheDocument();
  });
});
