import styled from 'styled-components';

export const Container = styled.main`
  padding: 8rem 0 4rem;
  min-height: 100vh;

  h1 {
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 3rem;
    text-align: center;
  }
`;

export const MapContainer = styled.div`
  margin-bottom: 4rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 28px rgba(0, 0, 0, 0.1);
  height: 400px;

  .gm-style-iw {
    padding: 1rem;
    
    h3 {
      font-size: 1.25rem;
      color: var(--primary);
      margin-bottom: 0.5rem;
    }

    p {
      color: var(--gray);
      font-size: 0.875rem;
    }
  }
`;

export const StoreList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const StoreCard = styled.div`
  background: var(--gray-light);
  padding: 2rem;
  border-radius: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 2rem;
    color: var(--primary);
    margin-bottom: 2rem;
    text-align: center;
  }

  .info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;

    .section {
      h4 {
        font-size: 1.25rem;
        color: var(--primary);
        margin-bottom: 1rem;
      }

      p {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--gray);
        margin-bottom: 0.75rem;

        svg {
          color: var(--secondary);
          font-size: 1.25rem;
        }

        strong {
          color: var(--primary);
          margin-left: 0.25rem;
        }
      }

      .neighborhood,
      .city,
      .hours,
      .time {
        margin-left: 1.75rem;
      }

      .hours {
        color: var(--gray);
      }

      .time {
        color: var(--secondary);
        font-weight: 500;
        margin-bottom: 1rem;
      }
    }
  }

  .buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;

    a {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      font-weight: bold;
      transition: filter 0.2s;
      text-align: center;
      flex: 1;
      max-width: 250px;

      &.maps-button {
        background: var(--primary);
        color: var(--background);
      }

      &.whatsapp-button {
        background: #25D366;
        color: var(--background);
      }

      &:hover {
        filter: brightness(0.9);
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: stretch;

      a {
        max-width: none;
      }
    }
  }
`; 