'use client';

import { CartContextProvider } from '@/contexts/cart-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';

interface DefaultProvidersProps {
  children: React.ReactNode;
}

const theme = {
  desktopBreakpoint: '1023px',
  tabletBreakpoint: '767px',
  mobileBreakpoint: '500px',
};

export function DefaultProviders({ children }: DefaultProvidersProps) {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <CartContextProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </CartContextProvider>
    </QueryClientProvider>
  );
}
