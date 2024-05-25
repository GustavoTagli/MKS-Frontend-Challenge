import styled from 'styled-components'
import { motion } from 'framer-motion'

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 486px;
  height: 100vh;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  padding: 32px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    width: 90vw;
  }
`

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h3 {
    font-size: 28px;
    font-family: inherit;
    font-weight: 700;
  }
`

export const CartItemsContainer = styled(motion.div)`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin: 40px 0 120px 0;
  padding: 12px;
  overflow-y: auto;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.desktopBreakpoint}) {
    scrollbar-color: rgba(0, 0, 0, 0.6) transparent;
    scrollbar-width: thin;
    scrollbar-track-color: transparent;
  }

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    margin-top: 20px;
  }
`

export const CartFooter = styled.div`
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
`
