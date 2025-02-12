import styled from 'styled-components';

export const Container = styled.header`
  padding: 0.5rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: var(--primary);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0;

    > div {
      justify-content: center;
    }
  }
`;

export const Logo = styled.div`
  a {
    display: block;
    transition: transform 0.2s;
    line-height: 0;

    &:hover {
      transform: scale(1.05);
    }
  }

  img {
    height: 100px;
    width: 100px;
    object-fit: contain;
    display: block;
  }

  @media (max-width: 768px) {
    img {
      height: 80px;
      width: 80px;
    }

    &.hidden {
      display: none;
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
  background: #FF0000;
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