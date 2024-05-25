import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ProductContainer = styled(motion.div)`
  user-select: none;
  height: 300px;
  width: 220px;
  padding: 14px;
  padding-bottom: 32px;

  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;

  background-color: var(--primary-color);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  overflow: hidden;
  cursor: default;
`

export const ProductImage = styled.figure`
  height: 130px;
  margin: 0 auto;
  > img {
    width: auto;
    height: 100%;
  }
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6px;

    > h3 {
      font-size: 16px;
      font-weight: 400;
      font-family: inherit;
      color: var(--text-color);

      display: -webkit-box;
      -webkit-line-clamp: 2;
      overflow: hidden;
      -webkit-box-orient: vertical;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px 8px;
      height: 24px;

      border-radius: 6px;
      background-color: var(--dark-20);

      > p {
        font-size: 15px;
        font-weight: 700;
        font-family: inherit;
        color: var(--primary-color);
      }
    }
  }
  > p {
    font-size: 10px;
    font-weight: 300;
    font-family: inherit;
    color: var(--text-color);

    display: -webkit-box;
    -webkit-line-clamp: 4;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
`
