import { Fragment } from "react"

interface WhenProps {
	expr: () => boolean
	children: React.ReactNode
}

export function When(props: WhenProps) {
	const { expr, children } = props

	if (expr()) <Fragment>{children}</Fragment>

	return null
}
