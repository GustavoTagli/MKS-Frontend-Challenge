import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  .disabled {
    color: var(--gray-10);
  }

  > p {
    font-size: 8px;
    font-family: inherit;
    font-weight: 400;
    margin-bottom: 4px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    padding: 4px 8px;
    width: 100%;
    height: 100%;

    background-color: var(--primary-color);
    border-radius: 4px;
    border: 0.3px solid var(--gray-10);

    > button {
      width: 10px;
      display: flex;
      align-items: center;
      background-color: transparent;
      color: var(--dark-10);
      border: none;
      cursor: pointer;
      outline: none;
    }

    > p {
      font-size: 12px;
      font-family: inherit;
      font-weight: 400;
      color: var(--dark-10);
      min-width: 16px;
      text-align: center;
    }

    > span {
      width: 0.2px;
      height: 14px;
      background-color: var(--gray-10);
    }
  }

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    grid-area: quantity;
    max-width: 100px;
    height: 36px;

    > p {
      display: none;
    }
  }
`
