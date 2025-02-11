import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    margin-bottom: 2rem;
    color: #333;
  }
`;

export const AdminPanel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  section {
    background: #fff;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h2 {
      margin-bottom: 1.5rem;
      color: #333;
    }
  }
`;

export const ItemForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    font-weight: 500;
    color: #555;
  }

  input, textarea, select {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: #f0592c;
    }
  }

  textarea {
    min-height: 100px;
    resize: vertical;
  }

  small {
    color: #666;
    font-size: 0.875rem;
  }
`;

export const ImagePreview = styled.div`
  width: 100%;
  height: 200px;
  border: 2px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  overflow: hidden;

  &:hover {
    border-color: #f0592c;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-size: 0.875rem;
    text-align: center;
    padding: 1rem;
  }
`;

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 600px;
  overflow-y: auto;

  .item {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;

    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 4px;
    }

    .content {
      flex: 1;

      h3 {
        margin: 0 0 0.5rem;
        color: #333;
      }

      p {
        margin: 0 0 0.5rem;
        color: #666;
        font-size: 0.9rem;
      }

      span {
        display: block;
        color: #f0592c;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }

      .actions {
        display: flex;
        gap: 0.5rem;
      }
    }
  }
`;

export const Button = styled.button<{ variant?: 'secondary' | 'edit' | 'delete' }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  ${({ variant }) => {
    switch (variant) {
      case 'secondary':
        return `
          background: #e0e0e0;
          color: #333;
          &:hover {
            background: #d0d0d0;
          }
        `;
      case 'edit':
        return `
          background: #4CAF50;
          color: white;
          &:hover {
            background: #45a049;
          }
        `;
      case 'delete':
        return `
          background: #f44336;
          color: white;
          &:hover {
            background: #da190b;
          }
        `;
      default:
        return `
          background: #f0592c;
          color: white;
          &:hover {
            background: #e04d20;
          }
        `;
    }
  }}
`; 