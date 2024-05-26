import { Header } from '@/components/header'
import store from '@/lib/redux/store'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import '@testing-library/jest-dom'

const renderComponent = () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  )
}

describe('Header', () => {
  it('should render a heading', () => {
    renderComponent()

    const heading = screen.getByTestId('heading')

    expect(heading).toBeInTheDocument()
  })
})
