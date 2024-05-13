import styled from "styled-components"

interface ContainerProps {
	padding?: number
}

export const BoxMain = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;

	min-height: 100vh;

	> main {
		flex: 1 1 auto;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 36px 24px;
	}

	@media (max-width: ${({ theme }) => theme.desktopBreakpoint}) {
		> main {
			margin-top: 80px;
		}
	}
`

export const CloseButtonContainer = styled.button<ContainerProps>`
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

export const TagFooter = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 8px;
	background-color: var(--bg-gray);

	> p {
		font-size: 12px;
		font-weight: 400;
		font-family: inherit;
		color: var(--dark-10);
	}
`

export const TagHeader = styled.header`
	flex: 0 0 auto;
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--secondary-color);
	padding: 20px 64px;
	width: 100%;

	font-family: inherit;

	> h1 {
		font-size: 40px;
		font-weight: 600;
		color: var(--primary-color);

		> span {
			font-size: 20px;
			font-weight: 300;
			margin-left: 5px;
		}
	}

	@media (max-width: ${({ theme }) => theme.desktopBreakpoint}) {
		position: fixed;
		z-index: 1000;
	}

	@media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
		padding: 20px 20px;
		> h1 {
			font-size: 32px;
			> span {
				font-size: 16px;
			}
		}
	}
`
