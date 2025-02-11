import styled from 'styled-components';

export const Container = styled.section`
  padding: 4rem 0;
  background: var(--background);

  h2 {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 3rem;
    text-align: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const Card = styled.div`
  background: var(--gray-light);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .content {
    padding: 1.5rem;

    h3 {
      font-size: 1.5rem;
      color: var(--primary);
      margin-bottom: 0.75rem;
    }

    p {
      color: var(--gray);
      margin-bottom: 1rem;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    span {
      display: block;
      font-size: 1.25rem;
      font-weight: bold;
      color: var(--secondary);
      margin-bottom: 1rem;
    }

    .order-button {
      display: inline-block;
      background: var(--secondary);
      color: var(--background);
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      font-weight: bold;
      transition: filter 0.2s;
      text-align: center;
      width: 100%;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`; 