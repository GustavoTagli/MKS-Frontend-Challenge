import styled from 'styled-components'
import { ContainerProps } from './types'

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-10);
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  padding: ${(props) => (props.padding ? `${props.padding}px` : '8px')};

  > svg {
    color: var(--primary-color);
  }

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    > svg {
      color: var(--secondary-color);
      width: 28px;
      height: 28px;
    }
  }
`
