import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Card = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 3fr;
  gap: 10px;
  align-items: center;
  width: 100%;
  padding: 20px 16px;
  position: relative;

  border-radius: 8px;
  background-color: var(--primary-color);
  color: var(--text-dark);

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    grid-template-columns: 2fr;
    gap: 12px;
    grid-template-areas:
      'image image'
      'name name'
      'quantity price';
  }
`

export const CardImage = styled.figure`
  height: 60px;
  margin: 0 auto;
  > img {
    width: auto;
    height: 100%;
  }

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    grid-area: image;
    height: 90px;
  }
`

export const CardTitle = styled.h4`
  font-size: 14px;
  font-weight: 400;
  font-family: inherit;
  color: var(--dark-20);

  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  -webkit-box-orient: vertical;

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    grid-area: name;
    font-size: 16px;
    text-align: center;
  }
`

export const CardPriceContainer = styled.div`
  font-size: 14px;
  font-family: inherit;
  font-weight: 700;
  color: var(--dark-10);
  text-align: right;

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    grid-area: price;
    background-color: var(--dark-20);
    padding: 8px 12px;
    border-radius: 6px;
    height: 100%;

    color: var(--primary-color);
  }
`

export const ContainerAbsolute = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    top: 8px;
    right: 12px;

    > button {
      padding: 0px;
      background-color: transparent;
      svg {
        color: var(--dark-10);
        width: 24px;
        height: 24px;
      }
    }
  }
`
