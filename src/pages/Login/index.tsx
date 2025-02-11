import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, LoginForm, ErrorMessage } from './styles';
import { useAuth } from '../../contexts/AuthContext';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const success = await login(formData.username, formData.password);
      if (success) {
        navigate('/admin');
      } else {
        setError('Usuário ou senha inválidos');
      }
    } catch (err) {
      setError('Ocorreu um erro ao tentar fazer login');
    }
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <h1>Login Administrativo</h1>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <div>
          <label htmlFor="username">Usuário</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">Entrar</button>
      </LoginForm>
    </Container>
  );
}; 