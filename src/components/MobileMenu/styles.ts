import styled from 'styled-components';

export const Container = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MenuButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
  background: #111111;
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  svg {
    color: #fff;
    font-size: 1.5rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: #222222;
    transform: scale(1.05);
    
    svg {
      transform: rotate(180deg);
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 998;
`;

export const MenuContent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  max-width: 300px;
  height: 100vh;
  background: #111111;
  z-index: 999;
  padding: 4rem 1.5rem 2rem;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    
    img {
      width: 80px;
      height: 80px;
      object-fit: contain;
    }
  }

  nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
      color: #fff;
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: 500;
      transition: color 0.3s ease;
      padding: 0.75rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      &:hover {
        color: var(--primary);
      }

      &.order-button {
        background: #FF0000;
        color: #fff;
        padding: 1rem;
        border-radius: 8px;
        text-align: center;
        font-weight: 600;
        margin-top: 1rem;
        border: none;

        &:hover {
          background: #CC0000;
        }
      }
    }
  }
`; 