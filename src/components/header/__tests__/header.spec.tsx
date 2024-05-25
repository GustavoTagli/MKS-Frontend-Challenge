import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { Header } from '@/components/header';
import { Provider } from 'react-redux';
import store from '@/lib/redux/store';

const renderComponent = () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
};

describe('Header', () => {
  it('should render a heading', () => {
    renderComponent();

    const heading = screen.getByTestId('heading');

    expect(heading).toBeInTheDocument();
  });
});
