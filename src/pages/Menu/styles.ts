import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  padding: 2rem 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  h1 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 2rem;
    font-weight: bold;
    color: var(--primary);
  }
`;

export const CategoryNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  button {
    background: transparent;
    border: none;
    color: #666;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: var(--primary);
    }

    &.active {
      color: var(--primary);
      border-bottom: 2px solid var(--primary);
    }
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
    
    button {
      font-size: 1rem;
      padding: 0.5rem;
    }
  }
`;

export const MenuSection = styled.section`
  margin-bottom: 3rem;

  .items-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 1rem;
  }
`;

export const MenuItem = styled.div`
  background: #111111;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
  }

  .content {
    padding: 1.5rem;
    background: #111111;

    h3 {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
      color: #ffa600;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    p {
      font-size: 0.95rem;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 1rem;
      min-height: 40px;
      line-height: 1.4;
    }

    small {
      display: block;
      color: rgba(255, 255, 255, 0.6);
      margin-bottom: 0.5rem;
    }

    span {
      display: block;
      font-size: 1.5rem;
      color:rgb(255, 255, 255);
      font-weight: bold;
      margin-top: 0.5rem;
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;

  .modal-content {
    position: relative;
    max-width: 90%;
    max-height: 90vh;

    img {
      max-width: 100%;
      max-height: 90vh;
      object-fit: contain;
      border-radius: 8px;
    }

    .close-button {
      position: absolute;
      top: -40px;
      right: -40px;
      background: none;
      border: none;
      color: white;
      font-size: 2.5rem;
      cursor: pointer;
      padding: 0.5rem;
      line-height: 1;
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    .modal-content {
      .close-button {
        top: -30px;
        right: 0;
      }
    }
  }
`; 