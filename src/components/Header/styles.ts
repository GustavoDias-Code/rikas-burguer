import styled from 'styled-components';

export const Container = styled.header`
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &.scrolled {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 0;
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  
  a {
    color: var(--background);
    transition: color 0.2s;

    &:hover {
      color: var(--secondary);
    }
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    gap: 2rem;
    list-style: none;

    a {
      color: var(--background);
      font-weight: 500;
      transition: color 0.2s;

      &:hover {
        color: var(--secondary);
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const OrderButton = styled.button`
  background: var(--secondary);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: bold;
  
  a {
    color: var(--background);
  }

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 768px) {
    display: none;
  }
`; 