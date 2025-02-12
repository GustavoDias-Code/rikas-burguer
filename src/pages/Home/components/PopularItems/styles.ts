import styled from 'styled-components';

export const Container = styled.div`
  padding: 4rem 0;
  background: #fff;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--primary);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Card = styled.div`
  background: #111111;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;

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
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 1;

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
      flex: 1;
    }

    span {
      display: block;
      font-size: 1.5rem;
      color: rgb(255, 255, 255);
      font-weight: bold;
      margin: 1rem 0;
    }

    .order-button {
      display: block;
      width: 100%;
      max-width: 250px;
      margin-top: 1rem;
      padding: 0.75rem 1.5rem;
      background: var(--secondary);
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 600;
      text-align: center;
      transition: background 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`; 