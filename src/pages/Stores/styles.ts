import styled from 'styled-components';

export const Container = styled.main`
  padding: 10rem 0 4rem;
  min-height: 100vh;

  h1 {
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 3rem;
    text-align: center;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;

export const StoreInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const MapSection = styled.div`
  .map-container {
    width: 100%;
    height: 400px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 28px rgba(0, 0, 0, 0.1);
  }
`;

export const InfoSection = styled.div`
  .info-block {
    background: var(--gray-light);
    padding: 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;

    h2 {
      font-size: 1.75rem;
      color: var(--primary);
      margin-bottom: 1.5rem;
    }

    p {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--gray);
      margin-bottom: 0.5rem;
      font-size: 1.125rem;

      svg {
        color: var(--secondary);
      }

      &.details {
        margin-left: 1.75rem;
        font-style: italic;
        margin-bottom: 1.5rem;
      }

      &.time {
        color: var(--secondary);
        font-weight: 500;
      }
    }

    .schedule {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;

      @media (max-width: 480px) {
        grid-template-columns: 1fr;
      }

      h3 {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.25rem;
        color: var(--primary);
        margin-bottom: 1rem;

        svg {
          color: var(--secondary);
        }
      }
    }

    .maps-button, 
    .contact-buttons a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      font-weight: bold;
      transition: filter 0.2s;
      font-size: 1.125rem;
    }

    .maps-button {
      background: var(--primary);
      color: var(--background);
      width: 100%;
      
      &:hover {
        filter: brightness(0.9);
      }
    }

    .contact-buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      @media (max-width: 480px) {
        grid-template-columns: 1fr;
      }

      .whatsapp-button {
        background: #25D366;
        color: var(--background);
      }

      .phone-button {
        background: var(--secondary);
        color: var(--background);
      }

      a:hover {
        filter: brightness(0.9);
      }
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