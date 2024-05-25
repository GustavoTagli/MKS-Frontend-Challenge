import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CartControlContainer = styled.button`
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
`;

export const QuantityContainer = styled.div`
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
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 486px;
  height: 100vh;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  padding: 32px;
  position: relative;

  > div:first-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h3 {
      font-size: 28px;
      font-family: inherit;
      font-weight: 700;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    width: 90vw;
  }
`;

export const ItemsContainer = styled(motion.div)`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin: 40px 0 120px 0;
  padding: 10px;
  overflow-y: auto;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.desktopBreakpoint}) {
    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 5px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    margin-top: 20px;
  }
`;

export const TotalContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  font-size: 24px;
  font-family: inherit;
  font-weight: 700;
  color: var(--primary-color);

  > button,
  > div {
    font-size: 24px;
    font-family: inherit;
    font-weight: 700;
    color: var(--primary-color);
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 24px 32px;
  }

  > button {
    background-color: var(--dark-10);
    width: 100%;
    margin: 0 auto;
    padding: 24px;

    cursor: pointer;

    outline: none;
    border: none;
  }
`;
