import styled from 'styled-components'

export const MainContainer = styled.div`
  flex: 1 1 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 36px 24px;

  @media (max-width: ${({ theme }) => theme.desktopBreakpoint}) {
    margin-top: 80px;
  }
`
