import styled from 'styled-components';

export const Container = styled.main`
  padding: 8rem 0 4rem;
  min-height: 100vh;

  h1 {
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 1.5rem;
    text-align: center;
  }

  h2 {
    font-size: 1.5rem;
    color: var(--gray);
    margin-bottom: 3rem;
    text-align: center;
  }
`;

export const DeliveryOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;

  a, .pickup {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 2rem;
    border-radius: 8px;
    transition: transform 0.2s;
    text-align: center;

    svg {
      font-size: 3rem;
      margin-bottom: 1.5rem;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    p {
      color: var(--gray);
      line-height: 1.4;
      margin-bottom: 1.5rem;
    }

    &:hover {
      transform: translateY(-5px);
    }
  }

  a.delivery {
    background: var(--gray-light);
    color: var(--primary);

    &.ifood {
      svg {
        color: #EA1D2C;
      }
    }

    &.whatsapp {
      svg {
        color: #25D366;
      }
    }
  }

  .pickup {
    background: var(--primary);
    color: var(--background);
    cursor: default;

    svg {
      color: var(--secondary);
    }

    p {
      color: var(--gray-light);
    }

    .pickup-buttons {
      display: flex;
      gap: 1rem;
      width: 100%;
      margin-top: auto;

      a {
        flex: 1;
        padding: 0.75rem;
        border-radius: 4px;
        font-weight: bold;
        transition: filter 0.2s;
        font-size: 0.875rem;

        &.maps-button {
          background: var(--secondary);
          color: var(--background);
        }

        &.whatsapp-button {
          background: #25D366;
          color: var(--background);
        }

        &:hover {
          filter: brightness(0.9);
          transform: translateY(-2px);
        }
      }

      @media (max-width: 400px) {
        flex-direction: column;
      }
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`; 