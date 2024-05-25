'use client'

import store from '@/lib/redux/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import CartProvider from './cart-provider'
import { SnackbarProvider } from 'notistack'

const theme = {
  desktopBreakpoint: '1023px',
  tabletBreakpoint: '767px',
  mobileBreakpoint: '500px',
}

export function DefaultProviders({ children }: { children: React.ReactNode }) {
  const client = new QueryClient()

  return (
    <Provider store={store}>
      <CartProvider>
        <QueryClientProvider client={client}>
          <SnackbarProvider maxSnack={3}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </SnackbarProvider>
        </QueryClientProvider>
      </CartProvider>
    </Provider>
  )
}
