import { CloseButtonContainer } from "@/styles/Home.style"
import { X } from "@phosphor-icons/react"

interface CloseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	onClick: () => void
	size: number
	padding?: number
}

export function CloseButton({ onClick, size, padding, ...rest }: CloseButtonProps) {
	return (
		<CloseButtonContainer {...rest} onClick={onClick} padding={padding}>
			<X size={size} weight="bold" />
		</CloseButtonContainer>
	)
}
