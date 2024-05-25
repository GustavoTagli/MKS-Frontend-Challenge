import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 44px;
  padding: 8px 20px;

  border-radius: 8px;

  background-color: var(--primary-color);
  color: var(--dark-10);
  outline: none;
  border: none;
  cursor: pointer;

  > span {
    font-size: 18px;
    font-weight: 700;
  }

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    height: 32px;
    padding: 8px 12px;
    > svg {
      width: 16px;
      height: 16px;
    }
    > span {
      font-size: 14px;
    }
  }
`
