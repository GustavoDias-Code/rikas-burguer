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
`;

export const MenuSection = styled.section`
  margin-bottom: 4rem;

  h2 {
    font-size: 2rem;
    color: var(--primary);
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--gray-light);
  }

  .items-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
`;

export const MenuItem = styled.div`
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
      margin-bottom: 0.5rem;
    }

    p {
      color: var(--gray);
      margin-bottom: 1rem;
      line-height: 1.4;
    }

    span {
      display: block;
      font-size: 1.25rem;
      font-weight: bold;
      color: var(--secondary);
    }
  }
`; 