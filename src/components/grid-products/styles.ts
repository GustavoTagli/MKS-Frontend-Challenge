import styled from 'styled-components'

export const GridContainer = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;

  > p {
    grid-column: 1 / -1;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.desktopBreakpoint}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.tabletBreakpoint}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    grid-template-columns: 1fr;
  }
`
