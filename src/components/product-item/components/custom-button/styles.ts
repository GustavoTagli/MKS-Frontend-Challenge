import styled from 'styled-components'

export const ButtonContainer = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 8px 0;

  font-family: inherit;

  background-color: var(--secondary-color);
  color: var(--primary-color);
  border: none;
  outline: none;

  > span {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
  }
`
