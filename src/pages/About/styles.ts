import styled from 'styled-components';

export const Container = styled.main`
  padding: 10rem 0 4rem;
  min-height: 100vh;
`;

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto 4rem;

  h1 {
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 2rem;
    text-align: center;
  }

  p {
    font-size: 1.125rem;
    color: var(--text);
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 2rem;
    color: var(--primary);
    margin: 3rem 0 1.5rem;
  }

  ul {
    list-style: none;

    li {
      font-size: 1.125rem;
      color: var(--text);
      margin-bottom: 1rem;
      display: flex;
      align-items: center;

      &:before {
        content: "•";
        color: var(--secondary);
        font-size: 1.5rem;
        margin-right: 0.5rem;
      }
    }
  }
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.02);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    img {
      height: 250px;
    }
  }
`; 