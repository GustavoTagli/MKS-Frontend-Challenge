import styled from "styled-components"

const TagFooter = styled.footer`
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

export function Footer() {
	return (
		<TagFooter>
			<p>MKS sistemas © Todos os direitos reservados</p>
		</TagFooter>
	)
}
