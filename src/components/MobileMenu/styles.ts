import styled from 'styled-components';

export const Container = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  color: var(--background);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1100;
  position: relative;
`;

export const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const MenuContent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  max-width: 300px;
  height: 100vh;
  background: var(--primary);
  z-index: 1100;
  padding: 5rem 2rem 2rem;

  nav {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    a {
      color: var(--background);
      font-size: 1.25rem;
      font-weight: 500;
      transition: color 0.2s;

      &:hover {
        color: var(--secondary);
      }

      &.order-button {
        background: var(--secondary);
        padding: 0.75rem 1rem;
        border-radius: 4px;
        text-align: center;
        margin-top: 1rem;

        &:hover {
          filter: brightness(0.9);
          color: var(--background);
        }
      }
    }
  }
`; 