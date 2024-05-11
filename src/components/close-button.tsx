import { X } from "@phosphor-icons/react"
import styled from "styled-components"

interface CloseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	onClick: () => void
	size: number
	padding?: number
}

interface ContainerProps {
	padding?: number
}

const Container = styled.button<ContainerProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--dark-10);
	border: none;
	border-radius: 50%;
	outline: none;
	cursor: pointer;
	padding: ${(props) => (props.padding ? `${props.padding}px` : "8px")};

	> svg {
		color: var(--primary-color);
	}

	@media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
		> svg {
			color: var(--secondary-color);
			width: 28px;
			height: 28px;
		}
	}
`

export function CloseButton({
	onClick,
	size,
	padding,
	...rest
}: CloseButtonProps) {
	return (
		<Container {...rest} onClick={onClick} padding={padding}>
			<X size={size} weight="bold" />
		</Container>
	)
}
