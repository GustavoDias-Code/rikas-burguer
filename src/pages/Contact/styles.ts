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

  h2 {
    font-size: 2rem;
    color: var(--primary);
    margin-bottom: 2rem;
  }
`;

export const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  background: var(--gray-light);
  padding: 2rem;
  border-radius: 8px;

  .info-section {
    h2 {
      font-size: 1.5rem;
      color: var(--primary);
      margin-bottom: 1.5rem;
    }

    p {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--gray);
      margin-bottom: 1rem;

      svg {
        color: var(--secondary);
        font-size: 1.25rem;
      }

      strong {
        color: var(--primary);
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
  }
`;

export const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto 4rem;
  padding: 2rem;
  background: var(--gray-light);
  border-radius: 8px;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .form-group {
    margin-bottom: 1.5rem;

    label {
      display: block;
      font-size: 1rem;
      color: var(--primary);
      margin-bottom: 0.5rem;
    }

    input,
    select,
    textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
      color: var(--text);
      background: var(--background);
      transition: border-color 0.2s;

      &:focus {
        border-color: var(--secondary);
        outline: none;
      }
    }

    textarea {
      resize: vertical;
    }
  }

  button {
    width: 100%;
    padding: 1rem;
    background: var(--secondary);
    color: var(--background);
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const SocialLinks = styled.div`
  text-align: center;

  h2 {
    margin-bottom: 2rem;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 2rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--primary);
      font-size: 1.25rem;
      transition: color 0.2s;

      svg {
        font-size: 2rem;
      }

      span {
        font-size: 1rem;
      }

      &:hover {
        color: var(--secondary);
      }
    }
  }

  @media (max-width: 768px) {
    .social-icons {
      flex-direction: column;
      align-items: center;
    }
  }
`; 