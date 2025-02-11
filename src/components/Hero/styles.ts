import styled from 'styled-components';

export const Container = styled.section`
  padding: 8rem 0 4rem;
  background: var(--primary);
  min-height: 100vh;
  display: flex;
  align-items: center;

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  @media (max-width: 768px) {
    > div {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
`;

export const Content = styled.div`
  h1 {
    font-size: 3.5rem;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: var(--background);
  }

  p {
    font-size: 1.25rem;
    color: var(--gray-light);
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  a {
    display: inline-block;
    background: var(--secondary);
    color: var(--background);
    padding: 1rem 2rem;
    border-radius: 4px;
    font-weight: bold;
    font-size: 1.125rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 28px rgba(0, 0, 0, 0.3);
  }
`; 