"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

interface DefaultProvidersProps {
	children: React.ReactNode
}

export function DefaultProviders({ children }: DefaultProvidersProps) {
	const client = new QueryClient()

	return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
