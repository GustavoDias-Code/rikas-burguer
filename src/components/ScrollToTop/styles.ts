import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: var(--secondary);
  color: var(--background);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 900;

  svg {
    font-size: 1.25rem;
  }
`; 