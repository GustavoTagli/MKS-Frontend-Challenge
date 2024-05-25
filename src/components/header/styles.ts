import styled from 'styled-components'

export const Container = styled.header`
  flex: 0 0 auto;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--secondary-color);
  padding: 20px 64px;
  width: 100%;

  font-family: inherit;

  @media (max-width: ${({ theme }) => theme.desktopBreakpoint}) {
    position: fixed;
    z-index: 1000;
  }

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    padding: 20px 20px;
  }
`

export const Logo = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: var(--primary-color);

  > span {
    font-size: 20px;
    font-weight: 300;
    margin-left: 5px;
  }

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    font-size: 32px;
    > span {
      font-size: 16px;
    }
  }
`
