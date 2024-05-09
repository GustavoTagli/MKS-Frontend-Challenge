import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { DefaultProviders } from "@/components/default-providers"

const montserrat = Montserrat({
	subsets: ["latin"]
})

export const metadata: Metadata = {
	title: "MKS Sistemas"
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-br">
			<DefaultProviders>
				<body className={montserrat.className}>{children}</body>
			</DefaultProviders>
		</html>
	)
}
