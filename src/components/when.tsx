import { Fragment } from "react"

interface WhenProps {
	expr: any
	children: React.ReactNode
}

export function When(props: WhenProps) {
	const { expr, children } = props

	if (expr) return <Fragment>{children}</Fragment>

	return null
}
