import styled from 'styled-components';

export const Container = styled.footer`
  background: var(--primary);
  color: var(--background);
  padding-top: 4rem;
  margin-top: 4rem;

  .bottom {
    margin-top: 4rem;
    padding: 1.5rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.875rem;
    color: var(--gray);

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
      }
    }

    a {
      color: var(--secondary);
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

export const Section = styled.div`
  .logo {
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: flex-start;
    
    img {
      height: 130px;
      width: 130px;
      object-fit: contain;
      display: block;
    }

    @media (max-width: 768px) {
      justify-content: center;
      
      img {
        height: 110px;
        width: 110px;
      }
    }
  }

  h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--background);
    letter-spacing: -0.02em;
  }

  p {
    color: var(--gray);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    line-height: 1.6;

    svg {
      color: var(--secondary);
    }

    &.hours {
      margin-left: 1.5rem;
      color: var(--secondary);
      font-weight: 500;
    }

    &.address {
      margin-left: 1.5rem;
      font-style: italic;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    a {
      color: var(--gray);
      transition: color 0.2s;
      font-size: 1rem;
      font-weight: 500;

      &:hover {
        color: var(--secondary);
      }
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  a {
    color: var(--gray);
    font-size: 1.5rem;
    transition: color 0.2s;

    &:hover {
      color: var(--secondary);
    }
  }
`;

export const AppSection = styled.div`
  h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--background);
    letter-spacing: -0.02em;
  }

  .app-links {
    display: flex;
    gap: 1rem;

    .app-button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      transition: transform 0.2s;

      svg {
        font-size: 3rem;
        color: #EA1D2C;
      }

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`; 