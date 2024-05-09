import { X } from "@phosphor-icons/react"
import styled from "styled-components"

interface CloseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	onClick: () => void
	size: number
}

const Container = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--dark-10);
	border: none;
	border-radius: 50%;
	outline: none;
	cursor: pointer;
	padding: 8px;

	> svg {
		color: var(--primary-color);
	}
`

export function CloseButton({ onClick, size }: CloseButtonProps) {
	return (
		<Container onClick={onClick}>
			<X size={size} weight="bold" />
		</Container>
	)
}
